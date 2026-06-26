

function Form() {
    return (
        <>
            <form className="contact-form" action="https://formsubmit.co/52ac1b1793ed6217aba206e0c7ad2c4f"
        method="POST"
        encType="multipart/form-data"
      >
        <input type="hidden" name="_cc" defaultValue="roger@fishervent.com" />
        <input type="hidden" name="_subject" defaultValue="" />
                <h2>Contact Us</h2>
                <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input type="text" id="name" name="name" required="" />
                </div>
                <div className="form-group">
                    <label htmlFor="organization">Organization Name</label>
                    <input type="text" id="organization" name="organization" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" required="" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required="" />
                </div>
                <div className="form-group">
                    <label htmlFor="type">Type of Show *</label>
                    <select id="type" name="type" required="">
                        <option value="">-- Select --</option>
                        <option value="The American Adventure">The American Adventure</option>
                        <option value="Holidays in the USA">Holidays in the USA</option>
                        <option value="exhibition">Exhibition</option>
                        <option value="private_event">Private Event</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="date">Event Date *</label>
                    <input type="date" id="date" name="date" required="" />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Event Location *</label>
                    <input type="text" id="location" name="location" required="" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" required="" defaultValue={""} />
                </div>
                <button type="submit">Submit</button>
            </form>

        </>
    );
}

export default Form;