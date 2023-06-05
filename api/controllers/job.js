import { dbConnection } from "../connect.js";

export const getJobs = (req, res) => {
  // SQL Statement
  const sql = `
      SELECT jobs.job_title, companies.name AS company_name, companies.city, companies.country, jobs.salary_range, jobs.job_type
      FROM jobs
      INNER JOIN companies ON jobs.company_id = companies.id
    `;

  // Database query
  dbConnection.query(sql, (error, results) => {
    if (error) {
      console.error("Error executing the query:", error);
      res.status(500).json({ error: "Failed to retrieve jobs" });
      return;
    }

    // Return the job posts
    res.json(results);
  });
};
export const addJobs = (req, res) => {
  const {
    job_title,
    company_name,
    city_name,
    country_name,
    salary_range,
    job_type,
  } = req.body;

  // First check if there is a matching company
  dbConnection.query(
    `SELECT id FROM companies WHERE name = ? AND city = ? AND country = ?`,
    [company_name, city_name, country_name],
    (error, results) => {
      if (error) {
        console.error("Error executing the query:", error);
        res.status(500).json({ error: "Failed to add job" });
        return;
      }

      if (results.length > 0) {
        // If there is a matching company, add the job
        insertJob(job_title, results[0].id, salary_range, job_type, res);
      } else {
        // If there is no matching company, add the company first
        dbConnection.query(
          `INSERT INTO companies (name, city, country) VALUES (?, ?, ?)`,
          [company_name, city_name, country_name],
          (error, result) => {
            if (error) {
              console.error("Error executing the query:", error);
              res.status(500).json({ error: "Failed to add company" });
              return;
            }

            // Then add the job with the id of the newly inserted company
            insertJob(job_title, result.insertId, salary_range, job_type, res);
          }
        );
      }
    }
  );
};

function insertJob(job_title, company_id, salary_range, job_type, res) {
  dbConnection.query(
    `INSERT INTO jobs (job_title, company_id, salary_range, job_type) VALUES (?, ?, ?, ?)`,
    [job_title, company_id, salary_range, job_type],
    (error, result) => {
      if (error) {
        console.error("Error executing the query:", error);
        res.status(500).json({ error: "Failed to add job" });
        return;
      }
      // Return the ID of the inserted job
      res.json({ job_id: result.insertId });
    }
  );
}
