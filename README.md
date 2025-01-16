# NameInvestigatorApp

NameInvestigatorApp is a React application that integrates APIs to determine the possible origin of a name (full or first name only). The app displays the country of origin with its flag, and upon clicking the flag, a themed GIF is loaded. This project demonstrates the use of APIs, React state management, and interactive information visualization.

The assets and APIs used in this project are **NOT** my original work. This application was developed as a learning exercise to practice and demonstrate my abilities in web development.

**Features**:

- **Search:** Allows users to search for the origin of a name by entering the full name, only the first name, or only the last name.
- **Name Details:** Displays the possible country of origin of the searched name, along with the estimated probability of that being the correct origin.
- **Country Flag:** Shows the flag of the country corresponding to the name's origin.
- **Styling:** Basic responsive design using CSS, adapting to different screen sizes.
- **Error Handling:** Includes basic error handling for cases where the APIs fail or do not return information.

**Technologies Used:**

- **HTML**: Markup language for structuring the web page.
- **CSS**: Style sheet language for designing the appearance of the web page.
- **JavaScript**: Programming language for adding interactivity and logic to the web page.
- **React:** Library for building the user interface with reusable components.
- **APIs:**

* **[Namsor API](https://namsor.app/):** Used to determine the probable country of origin of a given name.
* **[Giphy API](https://developers.giphy.com/docs/):** Used to fetch relevant GIFs related to the identified country.
* **[Rest Countries API](https://restcountries.com/):** Used to obtain country flags and information.

**Instructions to Run the Project:**

1. Clone the repository: `git clone <repository-URL>`
2. Navigate to the project directory: `cd pokemon-app`
3. Install dependencies: `npm install`
4. Run the application: `npm start`

**Important Note**

This project uses the Namsor API and Giphy API to perform. To test the project in your local environment, you will need to obtain your own API Key from their websites **[Namsor API](https://namsor.app/)** **[Giphy API](https://developers.giphy.com/docs/)**. This follows the best practices to ensure safe and personalized use of their APIs.

**Demo**

https://github.com/user-attachments/assets/e8e435d3-a58f-4e25-924c-8912ed1dbc56

**Home**

![image](https://github.com/user-attachments/assets/d71186f3-038b-456e-82e2-cca074952114)

**Search Result**
![image](https://github.com/user-attachments/assets/5201b0be-27e4-4346-a468-6daf27fc5a1d)

**Assets used**

- **[favicon.io](https://favicon.io/emoji-favicons/magnifying-glass-tilted-left):** App Icon

- **[SVGrepo](https://www.svgrepo.com/svg/127033/magnifying-glass):** Search icon, title Icon
