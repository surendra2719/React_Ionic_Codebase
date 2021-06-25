import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {useState} from "react";
import {useForm} from "react-hook-form"
import { Card, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import Layout from "../layout/layout"
import "./auth.css"
const UpdateProfile: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [errorMsg, setErrorMsg] = useState("")
  const onSubmit = async (data: any) => {
    
  };
  return (
    <IonPage>
      <Layout>
          <Card className="card">
          <Card.Body>
          <h2 className="text-center mb-4 font-italic">UPDATE PASSWORD </h2>
          {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="font-italic label">Password</label>
              <input
                type="password"
                {...register('password')}
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <div className="form-group">
              <label  className="font-italic label"> Confirm Password</label>
              <input
                type="password"
                {...register('confirmPassword')}
                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary font-italic">
                    Update
                </button>
            </div>
            <div className="form-group">
              <button type="button" onClick={() => reset()} className="btn btn-warning font-italic">
                Reset
              </button>
            </div>
          </form>
          </Card.Body>
        </Card>

        <div className="w-100 text-center mt-2 font-italic">
          Need an account? <span className="signup font-italic"><Link to="/signup">Sign Up</Link></span>
        </div>
        </Layout>
    </IonPage>
  );
};

export default UpdateProfile;
