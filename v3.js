document.getElementById('votingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Find which candidate was selected
    var selectedCandidate = document.querySelector('input[name="candidate"]:checked');
    
    if (!selectedCandidate) {
        alert('Please select a candidate before voting.');
        return;
    }

    // Simulate submitting data to server (in real scenario, this would be an AJAX call or form submission)
    var voteData = {
        candidate: selectedCandidate.value
    };

    // Store data in localStorage or send to server
    
    // Redirect to thank-you page with query parameter indicating the vote casted
    window.location.href = 't.html?vote=' + encodeURIComponent(voteData.candidate);
});