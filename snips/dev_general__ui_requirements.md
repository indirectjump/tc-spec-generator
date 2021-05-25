## UI Requirements
For a UI implementation, you should provide a MarvelApp link with descriptions of the pages in scope and how each button and screen element should be implemented.  

You should provide examples in simple language so that reviewers and submitters can have a few test cases and understand the flow.  For instance:


*   Button X, when clicked will
    *   Show a progress spinner that covers the page, ensuring the user can’t click any other screen elements
    *   Validate form Y to ensure it has been properly filled out by the user
    *   Make a request to service Z to save the content of form Y to the database
    *   Once the form has been saved successfully, redirect the user to page A.
    *   On a failure, show error message “An error has occurred” with buttons “Retry”, and “Cancel” to the user.
        *   If “Retry” is clicked, hide the error window and retry the call to service Z again
        *   If “Cancel” is clicked, just hide the error window
    *   On a failure, log the failure message and HTTP response code at the WARNING level to the app’s log