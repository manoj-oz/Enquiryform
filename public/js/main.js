document.addEventListener('DOMContentLoaded', () => {
  const enquiryForm = document.getElementById('enquiryForm');

  if (!enquiryForm) {
    console.error('⚠️ enquiryForm not found in DOM');
    return;
  }

  enquiryForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      full_name: document.getElementById('fullName')?.value || '',
      phone: document.getElementById('phone')?.value || '',
      email: document.getElementById('enquiryEmail')?.value || '',
      dob: document.getElementById('enquiryDob')?.value || '',
      course: document.getElementById('course')?.value || '',
      education: document.getElementById('education')?.value || '',
      passed_out_year: document.getElementById('passedOutYear')?.value || ''
    };

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      });

      const result = await res.json();
      if (res.ok) {
        alert('✅ Enquiry submitted!');
        window.location.href = 'enquiry-dashboard.html';
      } else {
        alert(`❌ Error: ${result.message || 'Submission failed'}`);
      }
    } catch (err) {
      console.error('Error submitting enquiry:', err);
      alert('❌ Network error.');
    }
  });
});
