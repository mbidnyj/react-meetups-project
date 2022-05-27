import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetups(){
    function addMeetupHandler(meetup){
        fetch(
            "https://react-project-87d36-default-rtdb.firebaseio.com/meetups.json",
            {
                method: "POST",
                body: JSON.stringify(meetup),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }


    return (
        <section>
            <h1>Add New Meetup</h1>
                <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetups