import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {useForm} from "react-hook-form"
import { Card, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import Layout from "../layout/layout"
import "./auth.css"
const Login: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const onSubmit = async (data: any) => {
    
  };
  return (
    <IonPage>
      <Layout>
          <Card className="card">
          <Card.Body>
            <h2 className="text-center mb-4 font-italic">LOGIN </h2>
            {/* {errorMsg && <Alert variant="danger">{errorMsg}</Alert>} */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label className="font-italic label">Email</label>
                <input
                  type="text"
                  {...register('email')}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
              <div className="form-group">
                <label className="font-italic label">Password</label>
                <input
                  type="password"
                  {...register('password')}
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.password?.message}</div>
              </div>
              <div className="w-100 forgot mr-3 mb-3 font-italic">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary font-italic">
                  Login
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

export default Login;
