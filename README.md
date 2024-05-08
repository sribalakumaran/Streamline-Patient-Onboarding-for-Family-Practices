# Streamline-Patient-Onboarding-for-Family-Practices

We were tasked with developing an automated PDF filler system to streamline the onboarding process for new members joining a family practice, aiming to enhance efficiency and simplify administrative procedures.

## Demo

web app demo "link"

## Project Breakdown

### 1. Server Side

The server is responsible for handling CRUD operations in MongoDB and generating PDFs. The following routes are implemented:

- `/create`: Used to post data to MongoDB.
- `/generate`: Used to generate PDFs using the data stored in MongoDB.

Once generated, the PDF is stored in the server-side directory under the path:
`Streamline Patient Onboarding for Family Practices\server\PDF`, where the PDF filename is the same as the `first_name` of the patient.

### 2. Client Side

The client side is responsible for providing the user interface and collecting data from users using forms built with React.

### 3. Technologies Used

- **React.js**: Used for Frontend development.
- **Express.js**: Utilized for Backend development.
- **MongoDB**: Chosen for storing the data in the database.
- **Postman**: Employed to test endpoints.
- **Node.js**: Used as the runtime environment for the server-side code.
- **Visual Studio Code**: Utilized as the primary Integrated Development Environment (IDE) for developing the application.
- **pdf-lib**: An npm module used for generating PDFs.

### 4. Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install` in both the server-side and client-side directories.
4. Start the server using `npm start`.
5. Navigate to the client directory and start the client using `npm start`.

### 5. Usage

1. Access the web enrollment form through the provided localhost URL.
2. Fill out the required information in the form.
3. Submit the form to save the patient details in database.
4. Utilize the generate_pdf button to generate PDFs for patient records.

## Contributors

- [21pw36-Sribalakumaran]
