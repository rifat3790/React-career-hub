import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStroage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);

    const job = jobs.find(job => job.id === idInt);
    // console.log(jobs,id);

    const handleApplyJob = () => {
        saveJobApplication(id);
        toast.success('🦄 Wow so easy!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    return (
        <div>
            
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details coming here</h2>
                    <h2>Job Details of: {job.job_title} </h2>
                    <p>{job.company_name}</p>
                </div>

                    <div className="border">
                        <h2 className="text-2xl">Side things </h2>
                        <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                    </div>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;