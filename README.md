# employee-directory
Searchable employee directory app for U of A full stack boot camp

## Business Context

An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

## Acceptance Criteria

Given a table of random users, when the user loads the page, a table of employees should render. 

The user should be able to:

  * Sort the table by at least one category

  * Filter the users by at least one property.

Pseudocode:

Goal - create table of random workers
    Objective - format table component with table html
    Objective - link random user api to this 

Goal - sort the table by at least one category
    Objective - find code to add a sort button

Goal - filter the users by at least one property
    Objective - change the form component (in index.js of form folder) to take in first/last names to search by
    Objective - pass this search input to the table so it changes what's rendered