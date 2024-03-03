import React, { useState, useEffect } from "react";

const Index = () => {
  const [feedback, setFeedback] = useState("");
  const [submittedFeedback, setSubmittedFeedback] = useState([]);

  const Index = (e) => {
    e.preventDefault();
   
    const newFeedback = {
      name: "Anonymous",
      feedback: feedback,
      date: new Date().toLocaleString(), // Optional: Include the submission date
    };

    // Update the submittedFeedback state with the new feedback
    setSubmittedFeedback([...submittedFeedback, newFeedback]);

    // Reset the feedback state
    setFeedback("");
  };

  useEffect(() => {
    // Code to fetch the feedback data from the server or database
    // Replace the following code with your API call or database query
    const fetchFeedback = async () => {
      try {
        // Simulating a server delay of 1 second
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock data to simulate fetched feedback from the server or database
        const mockFeedback = [
          {
            name: "Pinal David",
            feedback: "Great website!",
            date: "5/10/2022, 10:30 AM",
          },
          {
            name: "Raj Agrawal",
            feedback: "Easy to navigate. Well done!",
            date: "6/11/2023, 2:45 PM",
          },
          {
            name: "Mensi Jain",
            feedback: "Could use some improvements.",
            date: "9/12/2022, 9:15 AM",
          },
          {
            name: "Yash adroja",
            feedback: "Impressive design and functionality.",
            date: "5/14/2022, 11:05 AM",
          },
          {
            name: "Navya Poojara ",
            feedback: "The website is very informative. Well done!",
            date: "7/15/2022, 3:30 PM",
          },
          {
            name: "Zeel Chavda",
            feedback: "Great job on the responsiveness of the site.",
            date: "4/16/2022, 8:45 AM",
          },
          {
            name: "Riyansh Kapadiya",
            feedback: "I encountered some issues with the checkout process.",
            date: "3/17/2022, 2:15 PM",
          },
          {
            name: "Roshni  Jadav",
            feedback: "The loading time could be improved.",
            date: "12/18/2022, 9:30 AM",
          },

        ];

        // Update the submittedFeedback state with the fetched feedback
        setSubmittedFeedback(mockFeedback);
      } catch (error) {
        console.error("Failed to fetch feedback:", error);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <>
      <div className="col-12 px-0">
        <h1>*Feedback Review*</h1>
        <div style={{ textAlign: "center" }}>
          {submittedFeedback.map((feedback, index) => (
            <div key={index}>
              <p>Name: {feedback.name}</p>
              <p>Feedback: {feedback.feedback}</p>
              <p>Date: {feedback.date}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;