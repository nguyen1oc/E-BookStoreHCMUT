import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import LHeader from "./LHeader";
import Footer from "../Log/Footer";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import NameBook from "../BookTittle";
import LFooter from "../Login/LFooter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const navigate = useNavigate(); // Dùng để chuyển hướng
  const [selectedOption, setSelectedOption] = useState("My Account"); // Default option
  const [currentPage, setCurrentPage] = useState(0);
  const booksPerPage = 4;
  return (
    <>

      {/* Y tuong la chia 2 bang, mot ben select cac lua chon de no hien ra
      Ma luc dau t k co thay doi cai /url nen ngoi sua cung met T^T */}
      <LHeader />
      <h1 className="text-center font-bold text-5xl mt-4 text-[#2D3250]">INFORMATION PAGE</h1>
      <div className="mt-15 ml-20 mr-20 p-6 flex">
        {/* LEFT SIDE */}
        <div className="w-1/3 p-6">
          <ul className="text-right text-[#2D3250]">
            <li className="cursor-pointer mb-4 hover:text-[#F6B17A]">
              <Link to="/profile/information">My Information</Link>
            </li>
            <li className="cursor-pointer mb-4 hover:text-[#F6B17A]">
              <Link to="/profile/order-items">Order Items</Link>
            </li>
            <li className="cursor-pointer mb-4 hover:text-[#F6B17A]">
              <Link to="/profile/notification">Notifications</Link>
            </li>
            <li className="cursor-pointer mb-4 hover:text-[#F6B17A]">
              <Link to="/profile/books">Your Books</Link>
            </li>
            <li className="cursor-pointer mb-4 hover:text-[#F6B17A]">
              <Link to="/profile/password">Change Password</Link>
            </li>
            <li className="cursor-pointer mb-4 hover:text-[#F6B17A]">
              <Link to="/profile/report">Report</Link>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-2/3 p-6 bg-gray-300">
          <Routes>
            <Route path="information" element={<Information />} />
            <Route path="order-items" element={<OrderItems />} />
            <Route path="notification" element={<Notification />} />
            <Route path="books" element={<Books />} />
            <Route path="password" element={<Password />} />
            <Route path="report" element={<Report/>} />
            <Route path="*" element={<p>Please select an option from the left.</p>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
};

const Report = () => {
  const [reportTitle, setReportTitle] = useState("");
  const [reportContent, setReportContent] = useState(""); 
  const [reports, setReports] = useState([]); 

  const handleSubmitReport = async () => {
    const user_id = localStorage.getItem("user_id")
    if (reportTitle.trim() !== "" && reportContent.trim() !== "") {
      try {
        const response = await fetch('http://localhost:5000/profile/report', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({content: reportContent, title: reportTitle, user_id: user_id}),
        });

        if(response.ok) {
          const newReport = await response.json();
          setReports((prevReports) => [...prevReports, newReport]);
          setReportTitle("");
          setReportContent("");
          toast.success("Post review successfully", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          const errorText = await response.json();
          toast.error(JSON.parse(errorText).error, {
            position: "bottom-right",
            autoClose: 2000, 
            hideProgressBar: false, 
            closeOnClick: true, 
            pauseOnHover: true, 
            draggable: true, 
            progress: undefined, 
            });
        }
      } catch(err) {
        console.error("Error submitting report:", err);
        alert("Error submitting report. Please try again.");
      }
    } else {
      alert("Please fill in both title and content before submiting");
    }
  };

  useEffect(() => {
    const fetchReports = async () => {
      const user_id = localStorage.getItem("user_id");
      if(!user_id) {
        console.error("User ID not found!");
        return;
      }
      try {
        const response = await fetch(`http://localhost:5000/profile/report?user_id=${user_id}`);
        if(response.ok) {
          const data = await response.json();
          setReports(data);
        } else {
          console.error("Failed to fetch reports");
        }
      } catch (err) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []);

  return (
    <>
      <div className="text-[#424769]">
        <h2 className="text-2xl font-bold">Submit a Report</h2>
        <hr className="border-t-2 border-grey-500 w-full mt-1 mb-1" />
        <p classname="text-[#424769] font-bold"> This part where you can send anything you want to the administrators</p>

        <input
        type="text"
        placeholder="Report Title"
        name="title"
        value={reportTitle}
        onChange={(e) => setReportTitle(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769] mt-2"/>

        <div>
          <textarea
            value={reportContent}
            onChange={(e) => setReportContent(e.target.value)}
            placeholder="Write your report here..."
            className="w-full p-4 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#424769] mt-5 hover:ring-2 hover:ring-[#424769]"
          />
          <div className="flex justify-end">
            <button
              className="bg-[#2D3250] text-white py-2 px-6 rounded-lg hover:bg-[#7077A1] focus:outline-none"
              onClick={handleSubmitReport}
            >
              Submit Report
            </button>
          </div>
        </div>

        {/* Display submitted reports */}
        <div className="mt-6">
          <h3 className="text-xl font-bold">Your Submitted Reports</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto max-width: 300px white">
              <thead>
                <tr className="bg-[#F6F6F6]">
                  <th className="px-4 py-2 text-left">Report ID</th>
                  <th className="px-4 py-2 text-left">Title</th>
                  <th className="px-4 py-2 text-left">Date Submitted</th>
                  <th className="px-4 py-2 text-left">Content</th>
                </tr>
              </thead>
              <tbody>
                {reports.length > 0 ? (
                  reports.map((report) => (
                    <tr key={report.report_id}>
                      <td className="px-4 py-2">#{report.report_id}</td>
                      <td className="px-4 py-2">{report.title}</td>
                      <td className="px-4 py-2">{new Date(report.report_date).toLocaleDateString()}</td>
                      <td className="px-4 py-2 whitespace-pre-wrap break-words overflow-hidden max-w-[300px]">{report.description}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="px-4 py-2 text-center text-gray-500">
                      No reports submitted yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};


const Information = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const user_id = localStorage.getItem("user_id");
      if(!user_id) {
        console.error("User ID not found!");
        return;
      }
      try {
        const res = await fetch(`http://localhost:5000/profile/information?user_id=${user_id}`);
        if (!res.ok) throw new Error("Failed to fetch user info");
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading...</p>;
  
  return (
    <div className="text-[#424769]">
      <h2 className="font-bold">YOUR PROFILE</h2>
      <h3 className="text-[#424769]">Configure your information to secure the account</h3>
      <hr className="border-t-2 border-grey-500 w-full mt-1 mb-5" />
      <div className="container flex">
        <div className="w-1/5 text-right font-bold">
          <p>Username:</p>
          <p>ID:</p>
          <p>Phone Number:</p>
          <p>Email:</p>
        </div>
        <div className="w-4/5 ml-2">
          <p>{data.user_name}</p>
          <p>{data.users_id}</p>
          <p>{data.phone_number}</p>
          <p>{data.email}</p>
        </div>
      </div>
    </div>
  );
};

const OrderItems = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      const user_id = localStorage.getItem("user_id");
      if (!user_id) {
        setError("User ID not found!");
        return;
      }

      try {
        const response = await fetch(`http://localhost:5000/profile/order-items?user_id=${user_id}`);
        if (!response.ok) {
          setError("Failed to fetch order history");
          return;
        }
        const data = await response.json();
        const groupedOrders = Object.values(groupOrdersByOrderId(data)); // Nhóm các đơn hàng
        setOrders(groupedOrders);
      } catch (err) {
        setError("Error fetching orders");
        console.error(err);
      }
    };

    fetchOrders();
  }, []);

  const groupOrdersByOrderId = (orders) => {
    return orders.reduce((acc, curr) => {
      const { order_id, total_money, order_date, title, quantity } = curr;

      // Nếu order_id chưa tồn tại trong accumulator, thêm mới
      if (!acc[order_id]) {
        acc[order_id] = {
          total_money,
          order_id,
          order_date,
          items: [],
        };
      }

      // Thêm sách vào mảng items của order_id
      acc[order_id].items.push({ title, quantity });

      return acc;
    }, {});
  };

  const calculateTotalSpent = () => {
    return orders.reduce((total, order) => total + Number(order.total_money), 0);
  };

  if (error) return <p className="text-red-500">{error}</p>;
  if (orders.length === 0) return <p className="text-gray-500">No orders found</p>;

  return (
    <div className="text-[#424769]">
      <h2 className="text-2xl font-bold">Your Order History</h2>
      <h3 className="text-[#424769]">Here are the details of the books you've purchased</h3>
      <hr className="border-t-2 border-grey-500 w-full mt-1 mb-5" />

      {/* Hiển thị danh sách các đơn hàng */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-[#F6F6F6]">
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Books</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Purchase Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.order_id}>
                <td className="px-4 py-2">#{order.order_id}</td>
                <td className="px-4 py-2">
                  <ol className="list-disc pl-5">
                    {order.items.map((item, idx) => (
                      <li key={idx}>
                        {item.title} (x{item.quantity})
                      </li>
                    ))}
                  </ol>
                </td>
                <td className="px-4 py-2">{Number(order.total_money).toLocaleString("en-US")}</td>
                <td className="px-4 py-2">{new Date(order.order_date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tính tổng tiền đã chi */}
  <div className="mt-4 text-right font-bold text-xl">
    <p>
      Total Money Spent:{" "}
      {Number(calculateTotalSpent()).toLocaleString("en-US")}{" "}
      VND
    </p>
  </div>
    </div>
  );
};

const Notification = () => (
  <>
        <h2 className="text-2xl font-bold text-[#424769]">Notifications</h2>
        <h3 className="text-[#424769]">Here are the details of the books your notifications</h3>
        <hr className="border-t-2 border-grey-500 w-full mt-1 mb-5" />
        <p className="text-[#2D3250]"> You dont have any notifications.</p>
    </>
);

const Books = () => {
  const [books, setBook] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchBooks = async () => {
      const user_id = localStorage.getItem("user_id");
      if (!user_id) {
        setError("User ID not found!");
        return;
      }

      try {
        const response = await fetch(`http://localhost:5000/profile/books?user_id=${user_id}`);
        if (!response.ok) {
          setError("Failed to fetch book history");
          return;
        }
        const data = await response.json();
        setBook(data);
      } catch (err) {
        setError("Error fetching books");
        console.error(err);
      }
    };

    fetchBooks();
  }, []);

  return(
  <>
    <div className="text-[#424769]">
    <h2 className="text-2xl font-bold">Books Purchased</h2>
    <h3 className="text-[#424769]">Here are the books you've purchased</h3>
    <hr className="border-t-2 border-grey-500 w-full mt-1 mb-5" />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <div
          key={book.book_id}
          className="border border-gray-300 rounded-lg p-4 bg-white shadow-md hover:bg-gray-100"
        >
          <img
            src={book.image_url}
            alt={book.title}
            className="h-48 w-full object-cover rounded-md"
          />
          <h3 className="text-xl font-semibold mt-2">{book.title}</h3>
          <p className="text-[#2D3250]">Author: {book.user_name}</p>

          {/* Nút View Details */}
          <button
            className="mt-3 bg-[#7077A1] text-white px-4 py-2 rounded-md hover:bg-[#F6B17A]"
            onClick={() => handleViewDetails(book.book_id)}
          >
            Read
          </button>
        </div>
      ))}
    </div>
  </div>

         
  </>
)};



const Password = () => {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [error, setError] = useState(null);

  const handlePasswordChange = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    if (newPassword !== verifyPassword) {
      setError("New password and verification password do not match.");
      return;
    }

    const user_id = localStorage.getItem("user_id");
    if (!user_id) {
      setError("User ID not found!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/profile/password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id,
          old_password: oldPassword,
          new_password: newPassword,
        }),
      });

      if (response.ok) {
        toast.success("Change password successfully!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setTimeout(() => {
          navigate("/profile");
        }, 2000);
      } else {
        const errorText = await response.text();
        toast.error(JSON.parse(errorText).error, {
          position: "bottom-right",
          autoClose: 2000, 
          hideProgressBar: false, 
          closeOnClick: true, 
          pauseOnHover: true, 
          draggable: true, 
          progress: undefined, 
          });
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="text-[#424769]">
      <h2 className="text-2xl font-bold">Change Password</h2>
      <form onSubmit={handlePasswordChange} className="mt-4">
        <div className="container flex flex-col gap-4">
          <div>
            <label className="font-bold">Old Password</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Enter your old password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769]"
              required
            />
          </div>

          <div>
            <label className="font-bold">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your new password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769]"
              required
            />
          </div>

          <div>
            <label className="font-bold">Verify New Password</label>
            <input
              type="password"
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
              placeholder="Re-enter your new password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#424769] hover:ring-2 hover:ring-[#424769]"
              required
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#2D3250] text-white py-2 px-6 rounded-lg hover:bg-[#7077A1] focus:outline-none"
            >
              Save
            </button>
          </div>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Profile;
