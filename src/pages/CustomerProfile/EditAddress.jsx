import React from 'react'

const EditAddress = () => {
  return (
    <div className='EditAddressBackground container vh-100 vw-100 d-flex align-items-center'>

            <form className=' container' >
                <h4 align='center'>Edit Address</h4>
                <div class="row g-2 ">
                <div class="col-md">
                <div className='mb-3'>
                    <input type='text' className='form-control' placeholder='Enter your Full Name'></input>
                </div>
                
                <div className='mb-3'>
                    <input type='text' className='form-control' placeholder='Enter your Postcode'></input>
                </div>
                <div className='mb-3'>
                    <input type='text' className='form-control' placeholder='Enter your Phone Number'></input>
                </div>
                <div className='mb-3'>
                    <input type='text' className='form-control' placeholder='Enter your City'></input>
                </div>
                </div>
                <div class="col-md">
                    
                <div className='mb-3'>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Select Your Province</option>
                        <option value="1">North Central</option>
                        <option value="2">North Western</option>
                        <option value="3">Southern</option>
                        <option value="1">Uva</option>
                        <option value="2">Eastern</option>
                        <option value="3">Sabaragamuwa</option>
                        <option value="1">Central</option>
                        <option value="2">North</option>
                        <option value="3">Western</option>
                    </select>

                </div>
                <div className='mb-3'>
                    <input type='text' className='form-control' placeholder='Enter your Address'></input>
                </div>
                <div class="row g-2">
                <div class="col-md">
                <button align='center' type='submit' className='btn btn-info mx-4'>
                    Cancel

                </button>
                </div>
                <div class="col-md">
                <button align='center' type='submit' className='btn btn-info mx-4'>
                    Save

                </button>
                </div>
                </div>

                </div>
                </div>
            </form>
        </div>
  )
}

export default EditAddress
