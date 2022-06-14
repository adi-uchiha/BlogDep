import React from 'react'
import './write.css'

export default function Write() {
    return (
        <div className="write">
            <form className="writeForm">
                <img
                    className="writeImg"
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                />
                <div className="writeFormGroup">
                    <label htmlFor="fileinput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id='fileinput' style={{ display: 'none' }} />
                    <input type="text" placeholder='Title' className="writeInput" autoFocus={true} />

                </div>
                <div className="writeFormGroup">
                    <textarea className="writeInput, writeText" type="text" placeholder="Tell your Story..."></textarea>

                </div>
                <button className="writeSubmit" type='submit'>Publish</button>
            </form>
        </div>
    )
}
