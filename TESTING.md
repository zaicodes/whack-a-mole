# whack-a-mole - Testing

[Visit Live Game Here!](https://zaicodes.github.io/whack-a-mole/)
[Main READ ME FILE Here](https://github.com/zaicodes/whack-a-mole)

Continuous testing was an integral part of the entire development process. I relied on Chrome developer tools to identify and resolve issues as they arose during the development phase.

Throughout the development, Google developer tools were instrumental in verifying the proper functioning of various elements and troubleshooting any unexpected behavior.

I also leveraged the developer tools' console to carefully assess specific sections of JavaScript, ensuring that the code performed as intended and to troubleshoot any encountered issues.

To guarantee responsiveness across a variety of screen sizes and devices, I meticulously examined each page using both Google Chrome developer tools and the Firefox inspector tool.

## Manual Testing

### Testing Client Goals Testing

`First Time Visitors`

| Goals                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | How are they achieved?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| As a first time visitor, the game should immediately engage through its visuals, drawing me into the gameplay.                                                                                                                                                                                                                                                                                                                                                               | The "Whack-a-Mole" game features a playful and colorful cartoonish style designed to immediately captivate users upon their first visit to the site. This aesthetic is carefully structured enhancing the game board, where users engage with the game by clicking on the moles to win.                                                                                                                                                                                                                                                                                                                                  |
| As a first time user, I'd like a game that is responsive to different devices and easy to navigate.                                                                                                                                                                                                                                                                                                                                                                          |
| I've created the website with a focus on responsiveness. Buttons are strategically incorporated for navigation, similar to the approach used in mobile applications. - Given the mobile app-like nature of the site, I made the deliberate choice not to include a traditional navigation bar, as it would have deviated from the desired look and feel. Instead, the page title serves as a link back to the home page, preserving a seamless and app-like user experience. |
| As a first time visitor, the game clearly communicate how to play it through the instructions section and I'm able to choose difficulty options.                                                                                                                                                                                                                                                                                                                             | The game presents a window with a range of difficulty options for users to choose from. This allows users to select their preferred level of challenge before starting the game. After playing, they have the flexibility to switch to a different difficulty level for their next games. - Additionally, I created a button where the user can open and read the instructions to understand how to play. They can close the instructions box using three methods: clicking the 'x' button located in the top-right corner, clicking anywhere outside the instruction box, or pressing the 'escape' key on the keyboard. |

`Returning Visitors`

| Goals                                                                                                                       | How are they achieved?                                                                                                                          |
| :-------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| As a returning visitor, I want to be able to play different times and be able to monitor my performance and check my score. | Users are able to monitor their score which shows under the game-board while playing. They're able to check their score on the leaderboard too. |

`Frequent Visitors`

| Goals                                                                                                            | How are they achieved?                                                                                                                                                                                                                        |
| :--------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| As a frequent visitor, I have the ability to customise the auditory environment. I can also show or hide footer. | Users are able to play the background music or mute it by clicking on the music button, they can also hide or view the footer by clicking on the pull-up button at the bottom of the screen. This feature is not available in mobile screens. |
| Moreover, as a frequent visitor, I want to retain the autonomy to reset the game whenever they wish.             | There is a reset button that can be used at any point of the game, once clicked the game resets and user are able to put a name again and choose difficulty.                                                                                  |

---

### testing using other screen size devices and browsers

Comprehensive testing was conducted on the following devices:

Laptop:

- HP Envy 360

Mobile Devices:

- iPhone 13 Pro
- Samsung Galaxy S23 Ultra

Furthermore, the website underwent testing using the following browsers:

- Google Chrome
- Safari
- Firefox

No issues were reported when playing the game.

### Full testing of game page

| Feature                    | Expected Outcome                                                                                      | Testing Performed                                                                       | Result                                                        | Pass/Fail |
| -------------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------- | --------- |
| The Sites title            | Link directs the user back to the home page                                                           | Clicked title                                                                           | Home page reloads                                             | Pass      |
| Leaderboard button         | Displays the leaderboard list                                                                         | Clicked on button                                                                       | Leaderboard window opens                                      | Pass      |
| Leaderboard close button   | Closes the leaderboard                                                                                | Clicked on x button                                                                     | leaderboard closed                                            | Pass      |
| Play/Stop Music Button     | Plays music                                                                                           | Clicked on button twice                                                                 | Music plays and then stops when clicked again                 | Pass      |
| Instruction Button         | Instructions box opens                                                                                | Clicked on button                                                                       | the instruction box opens                                     | Pass      |
| Username window            | When filled the name appears at the buttom and uppon clicking save the name is saved to local storage | Filled the empty box then clicked save                                                  | The name is saved to the local storage                        | Pass      |
| All buttons - hover effect | All white buttons with black text should change to green shaded button when hovered over.             | Hover over each button on the page                                                      | Each button displayed the correct styling when hovered over   | Pass      |
| Hammer Cursor              | The Hammer cursor should display when a user moves the mouse over the game-board                      | Moved the mouse over the game board area to check the cursor changed upon entering area | The cursor changed from the arrow cursor to the hammer cursor | Pass      |
| Pull up footer feature     | The footer will show once clicked on                                                                  | Clicked on Pull up button                                                               | The footer appeared, and disappeared once clicked on again    | Pass      |
| Social links in footer     | Once clicked on these links, they open on external tab                                                | clicked on each link                                                                    | the social links opened on external tab each                  | Pass      |

## Automated Testing

### W3C Validator

I used [W3C](https://validator.w3.org/) to validate both the HTML and CSS on both pages of the website.

The results were pass with no errors found.

![index.html]()

![game.html]()

The validator showed Info for the trailing slash on void elements on many lines, which have no effect on code. They were left untouched, because they were not errors.

![trailing slash](link)

![style.css]() passed with 7 warnings.

![game.css]() passed with no errors or warnings.

### JavaScript Validator

I used [jshint](https://jshint.com/) to validate the Javascript code.

![script.js]()
![game.js]()

### Lighthouse

I utilized Lighthouse, a feature within Chrome Developer Tools, to assess the website's performance, accessibility, adherence to best practices, and SEO.

![Home page]()

![Game page]()

## Bugs discovered

During development I noticed a few bugs that needed fixing.

### Solved bugs

- When you click on mole multiple times, the score grows. This was fixed by
- The music button showing play music with stop icon, and vice versa
- Username showing each round of the game, this was fixed by making it appear when user reset the game only.
- Issue with footer not being responsive.
- scrollbar showing on game page, this was resolved by reducing the size of game board and score-board.
- Lighthouse error: "play() failed because the user didn’t interact with the document first", this was solved by making the music to not play automatically.
- Html validator showed warning: consider using the h1 elements as a top-level heading only. This was solved by changing the h1 element into h2 element.

### Unsolved bugs
