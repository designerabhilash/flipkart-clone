import React from 'react'
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input'

function Signin() {
    return (
        <Layout>
            <div className="col-sm-4 mx-auto mt-5">
                <form className="row g-3 needs-validation" noValidate>
                    <div className="col-md-12">
                        <Input
                            label="Email"
                            type="email"
                            value=""
                            onChange={() => {}}
                        />
                    </div>
                    <div className="col-md-12">
                        <Input
                            label="Password"
                            type="password"
                            value=""
                            onChange={() => {}}
                        />
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">SIGNIN</button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Signin
