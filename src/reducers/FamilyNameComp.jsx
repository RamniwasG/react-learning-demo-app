

const FamilyNamecomp = () => {

    return <form>
        <div className="row">
            <div className="container-fluid col-6  mt-2">
                <h4 className="text-center bg-success text-white">Family Name</h4>
                <div className="form-group">
                    <label htmlfor="fname">Full Name</label>
                    <input type='text' name='fname' className="form-control mb-2" id='fname' placeholder="Enter full name" />
                </div>
                <div className="form-group">
                    <label htmlfor="fathername">Father Name</label>
                    <input type='text' name='fathername' className="form-control mb-2" id='fathername' placeholder="Enter your father name" />
                </div>
                <div className="form-group">
                    <label htmlfor="mothername">Mother Name</label>
                    <input type='text' name='mothername' className="form-control mb-2" id='mothername' placeholder="Enter your mother name" />
                </div>
                <div className="form-group">
                    <label htmlfor="phone">Phone</label>
                    <input type='text' name='phone' className="form-control mb-2" id='phone' placeholder="Enter your phone number" />
                </div>
                <div className="form-group">
                    <label htmlfor="email">Email</label>
                    <input type='text' name='email' className="form-control mb-2" id='email' placeholder="Enter your email Id" />
                </div>
                {/* <div>
                    <label htmlfor="email">Email</label>
                    <input type='text' name='email' id='email' placeholder="Enter your email Id" />
                </div> */}
                <div>
                    <label htmlfor="address">Address</label>
                    <input type='text' name='address' className="form-control mb-2" id='address' placeholder="Enter your address" />
                </div>
            </div>
            <div className="col-6">

            </div>
        </div>
    </form>
}

export default FamilyNamecomp;