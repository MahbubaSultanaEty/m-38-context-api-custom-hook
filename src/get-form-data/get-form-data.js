/**
 * ways to get data from form
 * 1. e.target.[name of the input field]
 * 2. use form action and form data in the action handler. example: formData.get("name of the input field")
 * 3. controlled component. one per each field use state on change of the field. useful to dynamically handle error
 * 4. handle all cintrolled field on one state object
 * 5. Uncontrolled form using useRef
 */