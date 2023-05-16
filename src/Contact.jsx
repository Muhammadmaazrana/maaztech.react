import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className="container">
      <h2 className='text-center my-5'>Contact Us</h2>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone no.</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="+9230828372"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  )
}
