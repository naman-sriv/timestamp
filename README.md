# Timestamp Microservice

A simple full-stack JavaScript microservice that provides the Unix timestamp and UTC date/time for a given date or timestamp. If no date or timestamp is provided, it returns the current time.

## Functionality

This microservice has the following endpoints:

* **/api**: Returns the current Unix timestamp and UTC date/time in JSON format.
    ```json
    { "unix": 1714242540000, "utc": "Sun, 27 Apr 2025 16:59:00 GMT" }
    ```
* **/api/:date_string?**:
    * If a valid date string or Unix timestamp (in milliseconds) is provided in the `:date_string` path parameter, it returns the corresponding Unix timestamp and UTC date/time in JSON format.
        * Example usage:
            * `/api/2015-12-25`
            * `/api/1451001600000`
        * Example output:
            ```json
            { "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }
            ```
    * If the `:date_string` is invalid, it returns a JSON object with an error message.
        ```json
        { "error": "Invalid Date" }
        ```

## Technologies Used

* Node.js
* Express.js
* cors (for enabling Cross-Origin Resource Sharing)
* dotenv (for managing environment variables)

## Setup

1.  **Clone the repository** (if you have the code in one).
2.  **Navigate to the project directory** in your terminal.
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Create a `.env` file** in the root of the project to manage environment variables (optional, but recommended for setting the port):
    ```
    PORT=3000
    ```
5.  **Run the application:**
    ```bash
    npm start
    ```
    or
    ```bash
    node index.js
    ```
    The server will start listening on the port specified in your `.env` file or port `3000` by default.

## Frontend Usage (index.html)

The `views/index.html` file provides a simple interface to interact with the API:

1.  It includes an input field where you can enter a date string or a Unix timestamp.
2.  A "Get Timestamp" button triggers a JavaScript function to fetch data from the `/api/:date_string?` endpoint.
3.  The output (Unix timestamp and UTC date) is displayed on the page.
4.  Example links are provided for quick testing.

## Examples

You can access the API directly in your browser or using tools like `curl`:

* **Current timestamp:** `[your-project-url]/api`
* **Specific date:** `[your-project-url]/api/2023-10-27`
* **Specific Unix timestamp:** `[your-project-url]/api/1672531200000`
* **Invalid date:** `[your-project-url]/api/invalid-date`

## Deployment

This Node.js application can be deployed to various platforms, such as:

* [Heroku](https://www.heroku.com/)
* [Netlify](https://www.netlify.com/)
* [Vercel](https://vercel.com/)
* [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)
* [Google Cloud App Engine](https://cloud.google.com/appengine/)

The specific deployment steps will vary depending on the platform.

## Author

[Naman Srivastava/naman-sriv]

## License

[Your License (e.g., MIT)]
