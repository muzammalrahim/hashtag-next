import React from 'react'

export default function Sandiegomap() {
    return (
        <div className="hash-map h-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.3362449183883!2d-117.22655108533353!3d32.8628218869136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc012bd2a9e523%3A0x9bf6efa5cf00201d!2s7770%20Regents%20Rd%2C%20San%20Diego%2C%20CA%2092122%2C%20USA!5e0!3m2!1sen!2sin!4v1599480789688!5m2!1sen!2sin"
          className="map-image"
          loading="lazy"
        ></iframe>
      </div>
    )
}
