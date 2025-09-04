import React, { useState } from "react";

// Example blog data (you can replace with your 12 blogs)
const blogs = [
  {
    id: 1,
    img: "assets/images/blog/05.jpg",
    date: "15 Sep, 2023",
    category: "Modern Fashion",
    title: "Profitable business makes your profit Best Solution",
    link: "/blog/profitable-business-makes-your-profit-Best-Solution",
  },
  {
    id: 2,
    img: "assets/images/blog/06.jpg",
    date: "15 Sep, 2023",
    category: "Modern Fashion",
    title: "Details Profitable business makes your profit",
    link: "/blog/details-profitable-business-makes-your-profit",
  },
  {
    id: 3,
    img: "assets/images/blog/07.jpg",
    date: "15 Sep, 2023",
    category: "Modern Fashion",
    title: "One Profitable business makes your profit",
    link: "/blog/one-Profitable-business-makes-your-profit",
  },
  {
    id: 4,
    img: "assets/images/blog/08.jpg",
    date: "15 Sep, 2023",
    category: "Modern Fashion",
    title: "Me Profitable business makes your profit",
    link: "/blog/me-profitable-business-makes-your-profit",
  },
  {
    id: 5,
    img: "assets/images/blog/09.jpg",
    date: "15 Sep, 2023",
    category: "Modern Fashion",
    title: "Details business makes your profit",
    link: "/blog/details-business-makes-your-profit",
  },
  {
    id: 6,
    img: "assets/images/blog/10.jpg",
    date: "15 Sep, 2023",
    category: "Modern Fashion",
    title: "Firebase business makes your profit",
    link: "/blog/firebase-business-makes-your-profit",
  },
  {
    id: 7,
    img: "assets/images/blog/11.jpg",
    date: "15 Sep, 2023",
    category: "Modern Fashion",
    title: "Netlyfy business makes your profit",
    link: "/blog/netlyfy-business-makes-your-profit",
  },
  {
    id: 8,
    img: "assets/images/blog/12.jpg",
    date: "15 Sep, 2023",
    category: "Modern Fashion",
    title: "Profitable business makes your profit",
    link: "/blog/profitable-business-makes-your-profit",
  },
  {
    id: 9,
    img: "assets/images/blog/01.jpg",
    date: "15 Sep, 2023",
    category: "Modern Fashion",
    title: "Another Fashion Blog",
    link: "/blog/another-fashion-blog",
  },
  {
    id: 10,
    img: "assets/images/blog/02.jpg",
    date: "15 Sep, 2023",
    category: "Modern Fashion",
    title: "Trendy Fashion Blog",
    link: "/blog/trendy-fashion-blog",
  },
  {
    id: 11,
    img: "assets/images/blog/03.jpg",
    date: "15 Sep, 2023",
    category: "Modern Fashion",
    title: "Unique Style Blog",
    link: "/blog/unique-style-blog",
  },
  {
    id: 12,
    img: "assets/images/blog/04.jpg",
    date: "15 Sep, 2023",
    category: "Modern Fashion",
    title: "Classic Fashion Blog",
    link: "/blog/classic-fashion-blog",
  },
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;

  // Get current blogs for page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Total pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <section>
      <div className="rts-blog-area rts-section-gap bg_white bg_gradient-tranding-items">
        <div className="container">
          <div className="row g-5">
            {currentBlogs.map((blog) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12"
                key={blog.id}
              >
                <div className="single-blog-style-card-border">
                  <a href={blog.link} className="thumbnail">
                    <img src={blog.img} alt="blog-area" />
                  </a>
                  <div className="inner-content-body">
                    <div className="tag-area">
                      <div className="single">
                        <i className="fa-light fa-clock"></i>
                        <span>{blog.date}</span>
                      </div>
                      <div className="single">
                        <i className="fa-light fa-folder"></i>
                        <span>{blog.category}</span>
                      </div>
                    </div>
                    <a className="title-main" href={blog.link}>
                      <h3 className="title animated fadeIn">{blog.title}</h3>
                    </a>
                    <div className="button-area">
                      <a
                        href={blog.link}
                        className="rts-btn btn-primary radious-sm with-icon"
                      >
                        <div className="btn-text">Read Details</div>
                        <div className="arrow-icon">
                          <i className="fa-solid fa-circle-plus"></i>
                        </div>
                        <div className="arrow-icon">
                          <i className="fa-solid fa-circle-plus"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="row mt--50">
            <div className="col-lg-12">
              <div className="pagination-area-main-wrappper">
                <ul>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index}>
                      <button
                        className={currentPage === index + 1 ? "active" : ""}
                        onClick={() => setCurrentPage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                  {currentPage < totalPages && (
                    <li>
                      <button onClick={() => setCurrentPage(currentPage + 1)}>
                        <i className="fa-regular fa-chevrons-right"></i>
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
