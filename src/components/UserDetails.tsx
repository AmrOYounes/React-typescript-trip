import { IFormData } from "../interfaces/index";
interface IProps {
  user: IFormData;
}

const UserDetails = ({ user }: IProps) => {
  return (
    <div>
      <h3>Email: {user.email}</h3>
      <h3>password: {user.password}</h3>
    </div>
  );
};

export default UserDetails;
