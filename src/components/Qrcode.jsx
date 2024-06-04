const QrCode = () => {
    return (
        <>
        <div className="container">
            <div>
                <img src="" alt="" />
                <label htmlFor="dataInput" className="input-label">Data For Qr Code</label>
                <input type="text" id="dataInput" />
                <label htmlFor="sizeInput" className="input-label">Image Size (e.g.,150):</label>
                <input type="text" id="sizeInput" />
                <button>Generate QR Code</button>
                <button>Download QR Code</button>
            </div>
        </div>
        </>
    );
}

export default QrCode;