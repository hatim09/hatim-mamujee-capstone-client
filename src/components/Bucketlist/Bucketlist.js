import './Bucketlist.scss';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';
import Button from '@mui/material/Button';

const Bucketlist = () => {

    const { loggedInUser } = useContext(UserContext);
    const [bucketlistData, setBucketlistData] = useState([]);

    useEffect(() => {
        const fetchBucketlist = async () => {
            axios
                .get('http://localhost:8080/bucketlist')
                .then(response => {
                    console.log(response.data);
                    const bucketlistDataRes = response.data;
                    setBucketlistData(bucketlistDataRes);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        fetchBucketlist();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/bucketlist/${id}`);
            console.log('Item deleted successfully');
            setBucketlistData(bucketlistData.filter(item => item.id !== id));
        } catch (error) {
            console.error('Failed to delete item:', error.response.data.error);
        }
    };

    const handleDeleteAll = async () => {
        try {
            await axios.delete('http://localhost:8080/bucketlist');
            console.log('All items deleted successfully');
            setBucketlistData([]);
        } catch (error) {
            console.error('Failed to delete all items:', error.response.data.error);
        }
    };

    return (
        <div className="bucketlist">
            <h3 className="bucketlist__title">Welcome to your bucket list {loggedInUser.charAt(0).toUpperCase() + loggedInUser.slice(1)}!</h3>
            <table className="bucketlist__table">
                <thead>
                    <tr className="bucketlist__row">
                        <th className="bucketlist__cell"></th>
                        <th className="bucketlist__cell">City</th>
                        <th className="bucketlist__cell">Attraction Name</th>
                        <th className="bucketlist__cell">Attraction Description</th>
                        <th className="bucketlist__cell">
                            <Button onClick={handleDeleteAll} variant="contained">Delete All</Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {bucketlistData.map((item) => (
                        <tr className="bucketlist__row" key={item.id}>
                            <td className="bucketlist__cell">{item.id}</td>
                            <td className="bucketlist__cell">{item.city}</td>
                            <td className="bucketlist__cell">{item.attraction_name}</td>
                            <td className="bucketlist__cell">{item.attraction_description}</td>
                            <td className="bucketlist__cell">
                                <Button onClick={() => handleDelete(item.id)} variant="contained">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="bucketlist__space"></div>
        </div>
    );
};

export default Bucketlist;