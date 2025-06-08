# User List with Modal Details

This is a React TypeScript project that fetches a list of users and displays them in a table. Clicking on a user row opens a modal with detailed information about the user, including connection info, address, and company details.

## Features

- Fetches user data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)
- Displays users in a styled table
- Clickable rows open a modal with user details
- Modal supports closing via close button, clicking outside, or pressing Escape
- Styled with CSS modules

## Technologies

- React
- TypeScript
- Axios (for data fetching)
- CSS Modules

## Setup and Running

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## File Structure

- `UserList.tsx` - Fetches users and displays the table
- `UserCard.tsx` - Table row for each user, handles modal open state
- `UserModal.tsx` - Modal component showing detailed user info
- `DashboardStyles.module.css` - CSS styles for the components

## Modal Usage

- Click a user row to open the modal
- Close the modal by clicking the close button, clicking outside the modal, or pressing Escape

## License

This project is open source and free to use.

