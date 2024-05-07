document.getElementById('certificateForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const organization = document.getElementById('organization').value;
    const reason = document.getElementById('reason').value;

    // Update certificate details
    const organizationNameElement = document.querySelector('.organization-name');
    const nameElement = document.querySelector('.name');
    const reasonElement = document.querySelector('.reason');
    
    // Check if elements exist before setting textContent
    if (organizationNameElement) organizationNameElement.textContent = organization;
    if (nameElement) nameElement.textContent = `Name: ${name}`;
    if (reasonElement) reasonElement.textContent = `Reason: ${reason}`;

    // Generate QR code
    const qrCodeData = `Name: ${name}\nOrganization: ${organization}\nReason: ${reason}`;
    generateQRCode(qrCodeData);

    // Show certificate details
    document.getElementById('certificateDetails').classList.remove('hidden');
});

function generateQRCode(data) {
    // Code to generate QR code goes here
    // You can use a library like QRCode.js or an API for QR code generation
    // Here, we'll simply log the QR code data to the console
    console.log('QR Code Data:', data);
}
