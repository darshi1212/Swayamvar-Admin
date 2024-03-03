import React, { useEffect } from 'react';
import { Card } from '~/components/Card';
import { Button } from '~/components/Button';
import { Form } from '~/components/Form';


export default function FormsPage() {
 

  useEffect(() => {
    document.title = 'Swayamvar'
  }, []);

  return (
    <>
      <div className="col-12 title">
        <h1>Manage Chatbots</h1>
      </div>

      <br/>


       <div className="col-6 px-0">
        <Card>
          <div className="card-title">
            <h3>Question1</h3>
          </div>
          <div className="card-body light-text">
            <p>How to search for a potential partner?</p>
          </div>
          <div className="card-title">
            <h3>Answer</h3>
          </div>
          <div className="card-body light-text">
            <p>Go to the Matches page and use the search filters to find potential partners based on your preferences.</p>
          </div>

          <div className="card-actions center">
            <Button className="success btn-circle">Edit</Button>

          </div>

          <div className="card-actions center">
            <Button className="success btn-circle">Remove</Button>

          </div>
           </Card>

           <Card>
          <div className="card-title">
            <h3>Question2</h3>
          </div>
          <div className="card-body light-text">
            <p>What are the preferred qualities in a potential partner?</p>
          </div>
          <div className="card-title">
            <h3>Answer</h3>
          </div>
          <div className="card-body light-text">
            <p>Some of the preferred qualities include honesty, compatibility, shared values, sense of humor, and similar life goals.</p>
          </div>

          <div className="card-actions center">
            <Button className="success btn-circle">Edit</Button>

          </div>

          <div className="card-actions center">
            <Button className="success btn-circle">Remove</Button>

          </div>
        </Card>

        <Card>
          <div className="card-title">
            <h3>Question3</h3>
          </div>
          <div className="card-body light-text">
            <p>What are the important factors to consider before getting into a committed relationship?</p>
          </div>
          <div className="card-title">
            <h3>Answer</h3>
          </div>
          <div className="card-body light-text">
            <p>Some important factors to consider are mutual trust, communication, emotional compatibility, shared values, and a strong foundation of friendship.</p>
          </div>

          <div className="card-actions center">
            <Button className="success btn-circle">Edit</Button>

          </div>

          <div className="card-actions center">
            <Button className="success btn-circle">Remove</Button>

          </div>
        </Card>
      </div>

      <div className="col-6 px-0">
        <Card>
        <div className="card-title">
            <h3>Question4</h3>
          </div>
          <div className="card-body light-text">
            <p>How do you handle conflicts or disagreements in a relationship?</p>
          </div>
          <div className="card-title">
            <h3>Answer</h3>
          </div>
          <div className="card-body light-text">
            <p>It's important to communicate openly, listen to each other's perspectives, and find a compromise. Respecting each other's feelings and finding constructive solutions is key to resolving conflicts.</p>
          </div>

          <div className="card-actions center">
            <Button className="success btn-circle">Edit</Button>

          </div>

          <div className="card-actions center">
            <Button className="success btn-circle">Remove</Button>

          </div>
        </Card>

        <Card>
          <div className="card-title">
            <h3>Question5</h3>
          </div>
          <div className="card-body light-text">
            <p>How do you maintain a healthy work-life balance in a relationship?</p>
          </div>
          <div className="card-title">
            <h3>Answer</h3>
          </div>
          <div className="card-body light-text">
            <p>To maintain a healthy work-life balance, it's important to prioritize quality time together, set boundaries, and communicate openly about your needs and expectations. Finding a balance between personal and professional commitments is key to a fulfilling relationship.</p>
          </div>

          <div className="card-actions center">
            <Button className="success btn-circle">Edit</Button>

          </div>

          <div className="card-actions center">
            <Button className="success btn-circle">Remove</Button>

          </div>
        </Card>




      </div>
    </>
  );
}
