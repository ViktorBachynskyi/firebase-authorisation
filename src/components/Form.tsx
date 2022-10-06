import { useState } from "react";

type FormProps = {
  title: string,
  handleClick: (email: string, password: string) => void,
}

const Form: React.FC<FormProps> = ({title, handleClick}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        className="border mr-2 p-2"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        className="border mr-2 p-2"
      />
      <button
        className="border bg-green-400 p-2 hover:bg-green-500"
        onClick={() => handleClick(email, password)}
      >
        {title}
      </button>
    </div>
  )
}

export default Form;