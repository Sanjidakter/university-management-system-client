import { useNavigate } from "react-router-dom";
import { useChangePasswordMutation } from "../redux/features/admin/userManagement.api";
import { useAppDispatch } from "../redux/hooks";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { TResponse } from "../types";
import { logout } from "../redux/features/auth/authSlice";
import { Button, Row } from "antd";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const ChangePassword = () => {
  const [ChangePassword] = useChangePasswordMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    const res = 
    (await ChangePassword(data)) as TResponse<any>;
    console.log(res?.data?.success);
    if (res?.data?.success) {
      dispatch(logout());
      navigate("/login");
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit}>
        <PHInput type="text" name="oldPassword" label="Old Password" />
        <PHInput type="text" name="newPassword" label="New Password" />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default ChangePassword;
