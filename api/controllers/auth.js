import { dbConnection } from "../connect.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerEmployee = (req, res) => {
  // Check if the name property exists in the request body
  if (!req.body.name) {
    return res.status(400).json({ error: "Name is required" });
  }
  // Extract the employee's information from the request body
  const { name, surname, email, password, resume } = req.body;

  // Hash the password using bcrypt
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Error hahing password" });
    } else {
      // Insert the employee's information into the users table
      dbConnection.query(
        "INSERT INTO users (name, surname, email, password, user_type) VALUES (?, ?, ?, ?, 'employee')",
        [name, surname, email, hashedPassword],
        (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).json({ error: "Error registering employee" });
          } else {
            // Extract the user ID from the result
            const user_id = result.insertId;

            // Insert the employee's resume into the employees table
            dbConnection.query(
              "INSERT INTO employees (user_id, resume) VALUES (?, ?)",
              [user_id, resume],
              (err, result) => {
                if (err) {
                  console.log(err);
                  res.status(500).json({ error: "Error registering employee" });
                } else {
                  res
                    .status(201)
                    .json({ message: "Employee registered successfully" });
                }
              }
            );
          }
        }
      );
    }
  });
};

export const loginEmployee = (req, res) => {
  // Extract the employee's email and password from the request body
  const { email, password } = req.body;

  // Check if the employee's email exists in the database
  dbConnection.query(
    "SELECT * FROM users WHERE email = ? AND user_type = 'employee'",
    [email],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "Error logging in employee" });
      } else if (results.length == 0) {
        res.status(401).json({ error: "Invalid email or password" });
      } else {
        // Compare the provided password with the hashed password in the database using bcrypt
        bcrypt.compare(password, results[0].password, (err, isMatch) => {
          if (err) {
            console.log(err);
            res.status(500).json({ error: "Error logging in employee" });
          } else if (!isMatch) {
            res.status(401).json({ error: "Invalid email or password" });
          } else {
            // Create a JWT token and send it to the client
            const token = jwt.sign({ user_id: results[0].id }, "secret", {
              expiresIn: "1h",
            });
            res.status(200).json({ token: token });
          }
        });
      }
    }
  );
};

export const logoutEmployee = (req, res) => {
  // Extract the JWT token from the Authorization header
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];

  // Add the token to the blacklist in Redis with a TTL of the remaining time until token expiration
  const remainingTime = jwt.decode(token).exp - Date.now() / 1000;
  redisClient.setex(token, remainingTime, "blacklisted", (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Error logging out employee" });
    } else {
      res.status(200).json({ message: "Logged out successfully" });
    }
  });
};

// for employer

export const loginEmployer = (req, res) => {
  // Extract the employer's email and password from the request body
  const { email, password } = req.body;

  // Check if the employer's email exists in the database
  dbConnection.query(
    "SELECT * FROM users INNER JOIN employers ON users.id = employers.user_id WHERE email = ? AND user_type = 'employer'",
    [email],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "Error logging in employer" });
      } else if (results.length == 0) {
        res.status(401).json({ error: "Invalid email or password" });
      } else {
        // Compare the provided password with the hashed password in the database using bcrypt
        bcrypt.compare(password, results[0].password, (err, isMatch) => {
          if (err) {
            console.log(err);
            res.status(500).json({ error: "Error logging in employer" });
          } else if (!isMatch) {
            res.status(401).json({ error: "Invalid email or password" });
          } else {
            // Create a JWT token and send it to the client
            const token = jwt.sign({ user_id: results[0].user_id }, "secret", {
              expiresIn: "1h",
            });
            res.status(200).json({ token: token });
          }
        });
      }
    }
  );
};

// Employer registration function
export const registerEmployer = (req, res) => {
  // Check if the required properties exist in the request body
  if (
    !req.body.name ||
    !req.body.surname ||
    !req.body.email ||
    !req.body.password ||
    !req.body.companyName ||
    !req.body.country ||
    !req.body.city ||
    !req.body.taxCity ||
    !req.body.taxAdministration
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Extract the employer's information from the request body
  const {
    name,
    email,
    surname,
    password,
    companyName,
    country,
    city,
    taxCity,
    taxAdministration,
  } = req.body;

  // Hash the password using bcrypt
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Error hashing password" });
    } else {
      // Insert the employer's information into the users table
      dbConnection.query(
        "INSERT INTO users (name, surname, email, password, user_type) VALUES (?, ?, ?, ?, 'employer')",
        [name, surname, email, hashedPassword],
        (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).json({ error: "Error registering employer" });
          } else {
            // Extract the user ID from the result
            const user_id = result.insertId;

            // Insert the employer's information into the employers table
            dbConnection.query(
              "INSERT INTO employers (user_id, company_name, country_name, city_name, tax_city_name, tax_administration) VALUES (?, ?, ?, ?, ?, ?)",
              [user_id, companyName, country, city, taxCity, taxAdministration],
              (err, result) => {
                if (err) {
                  console.log(err);
                  res.status(500).json({ error: "Error registering employer" });
                } else {
                  res
                    .status(201)
                    .json({ message: "Employer registered successfully" });
                }
              }
            );
          }
        }
      );
    }
  });
};

export const logoutEmployer = (req, res) => {
  // Destroy current session and remove session cookie from the client
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }

    res.clearCookie("sid");
    res.status(200).json({ message: "Employer logged out successfully" });
  });
};
