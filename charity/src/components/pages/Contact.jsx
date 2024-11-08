import { Form, redirect, useActionData } from "react-router-dom"
// import contactImage from '../src/assets/contact-us.jpg'
export default function Contact() {
    const data = useActionData()

    return(
        <>
            <div className="contact-us">
                <div className="contact-us-form">
                    <h1>Contact Us</h1>
                    <Form method="post" action="/contact">
                    <label>
                            <span>Your Full name: </span>
                            <input type="name" name="name" required />
                        </label>
                        <label>
                            <span>Your email: </span>
                            <input type="email" name="email" required />
                        </label>
                        {data && data.error && <p>{data.error}</p>}
                        <label>
                            <span>Your message: </span>
                            <textarea name="message" required></textarea>
                        </label>
                        <button>Submit</button>
                    </Form>
                </div>

                <div className="contact-us-brief" style={{ backgroundImage: `url(../src/assets/contact-us.jpg)`}}>
                    <p><i>“ My siblings and I are a product of our mother&#39;s dedicated hard work as a vendor at a local municipal market. This fact makes me appreciate the need to empower women, for women influence the lives of many”.</i> </p>
                </div>
            </div>
        </>
    )
}

export const contactAction = async ({request}) => {
    console.log(request)
    const data = await request.formData()

    const submission = {
        email: data.get('email'),
        message: data.get('message'),
    }

    if(submission.message.length < 10){
        return{error: 'Message should be more than 1o words...'}
    }

    console.log(submission)
    return redirect('/contact')
}