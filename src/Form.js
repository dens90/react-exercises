import useForm from "./useForm";

const Form = ({users}) => {
  const {username, password, inputUser} = useForm(users)

  return(
    <div>
      <form onSubmit={inputUser}>
        <input type='text' name="username" />
        <input type="password" name="password" />
      <button type="submit">add</button>
      </form>
       <h1>{username} { password}</h1>
    </div>
  )
}

export default Form