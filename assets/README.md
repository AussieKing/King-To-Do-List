# AussieKing Simple Day Scheduler

This is a simple day scheduler/calendar to help you keep track of your daily tasks.

## Table of Contents

- [Features](#features)
- [Usage Guidelines](#usage-guidelines)
- [Languages Used](#languages-used)
- [Screenshots](#screenshots)
- [Live URL and Repository](#live-url-and-repository)
- [Credits](#credits)
- [License](#license)

## Features

The app shows individual timeblocks for working hours (8am to 5pm).
It also shows the current time and date.
Users will be able to type within the timeblocks any task, and by clicking the save button on the right, the event(s) will be saved and stored in the Local storage.

- The app has different color timeblocks: red for the past, blue for the present, and green for the future.
  - The timeblocks are updated each second, and once the timeblock becomes past, it changes color automatically.
- The app displays the current date and time leveraging DayJS, in the format of date, month, year (2 digits), hours, minutes, seconds (am/pm).
  - The user is shown their relative time and date.
- Events entered (and saved) are saved in the local storage.
 - Once an event is saved in local storage, refreshing the page, or even closing and reopening, won't have the events disappear.

## Usage guidelines

Clone the repository to your local machine and open the `index.html` file in your browser to view the Simple Day Scheduler application, or go to the [live site](#live-url-and-repository).

1. Open the application in your preferred web browser (Google Chrome recommended).
2. Enter your daily tasks in each relative timeblock.
3. Click on the Save button icon in each timeblock.
4. When the timeblock changes category (for example: from present to past), it will automatically change color.

## Languages Used
- HTML
- CSS
  - Flexbox
  - Media Queries
  - CSS Variables
- JavaScript
  - DOM Manipulation
  - Event Listeners
  - Event Handlers
  - Local Storage
  - Functions
  - Classes
- API (3rd parties)
  - jQuery
  - DayJS
  - Google Fonts
  - Bootstrap CSS
- NOTE: Much of the code HTML and CSS was provided as a part of the assessment, mostly requiring to build JS file and new classed and id in the HTML.

## Screenshots

### Current Date

![Screen Shot 2023-04-17 at 1 09 39 pm](https://user-images.githubusercontent.com/126050763/232368974-8108d208-8761-45cc-9903-0014587b0163.png)

### Color coded timeblocks

![Screen Shot 2023-04-17 at 1 10 16 pm](https://user-images.githubusercontent.com/126050763/232368991-13b21605-b780-41ca-b05c-4fcc8ac32edc.png)

### Save button

![Screen Shot 2023-04-17 at 1 12 44 pm](https://user-images.githubusercontent.com/126050763/232369114-0eae4205-5601-4c09-801b-d2fa3a5b67dd.png)


### Local Storage

![Screen Shot 2023-04-17 at 1 11 13 pm](https://user-images.githubusercontent.com/126050763/232369026-dce6aa20-0a69-4c6c-877b-3cac93cc4423.png)

## Live URL and Repository

The live application can be accessed at the following URL: 

The repository can be accessed at the following URL: 

## Credits

- All the 3rd parties API provided.

- Help from OpenAI's [ChatGPT](https://chat.openai.com/chat) for answering many questions about JavaScript syntax and CSS.

- The knowledgeable TA and Teachers, and the TAs available to us that help us through the week!

## License

Under the terms of the MIT license.

© 2023 AussieKing

