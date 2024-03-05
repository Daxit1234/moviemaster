import React, { useContext, useEffect, useState } from "react";
import SideBar from "../../components/sideBar/SideBar";
import AdminContext from "../../context/AdminContext";
import Header2 from "../../components/header2/Header2";
import TablePaginationDemo from "../../components/pagination/Paginathion";
import Rating from "@mui/material/Rating";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalReview, setTotalReview] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let responce = await fetch(
          `http://localhost:8080/review/getallreview?page=${page}&pageSize=${rowsPerPage}`
        );
        let data = await responce.json();
        setReviews(data.results);
        setTotalReview(data.totalData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setReviews, page, rowsPerPage]);
  return (
    <div className="d-flex">
      <SideBar />
      <div className="w-100">
        <Header2 page="User List" />
        <div className="cinema-list" style={{ height: "500px" }}>
          <table className="table w-100 overflow-auto table-striped">
            <tr className="table-title text-start">
              <th>Review.No</th>
              <th>Booking Id</th>
              <th>Rating Star</th>
              <th>Comment</th>
            </tr>
            {reviews?.map((item, index) => {
              const currentIndex = index + 1 + page * rowsPerPage;
              return (
                <tr className={`${index % 2 === 0 ? "even-row" : "odd-row"}`}>
                  <th>{currentIndex}</th>
                  <td className="text-left">{item.bookingId}</td>
                  <td>
                    <Rating name="simple-controlled" value={item.rating} readOnly />
                  </td>

                  <td className="text-left">
                    {item.comment} Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero error, ab laudantium pariatur itaque soluta nesciunt rerum eos enim repellat? Accusamus a corporis nesciunt quas, obcaecati sunt iste porro!
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        <TablePaginationDemo
          set={{ page, rowsPerPage, setPage, setRowsPerPage }}
          count={totalReview}
        />
      </div>
    </div>
  );
};

export default Review;
