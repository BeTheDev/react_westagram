import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import "./reset.css";

class Main extends React.Component {
  render() {
    return (
      <section>
        <nav>
          <div className="nav-wrap">
            <div className="navbar-left-side-links">
              <a href="">
                <img src="./img/icons8-instagram-50.png" alt="" />
              </a>
              <div className="logo-between-line"></div>
              <a href="">
                <img src="./img/logo_text.png" alt="" class="logo" />
              </a>
            </div>
            <div className="navbar-search">
              <img src="./img/icons8-search-24.png" alt="" />
              <input type="text" placeholder="검색" />
            </div>
            <div className="navbar-rightside-links">
              <a href="">
                <img src="./img/explore.png" alt="" />
              </a>
              <a href="">
                <img src="./img/heart.png" alt="" />
              </a>
              <a href="">
                <img src="./img/profile.png" alt="" />
              </a>
            </div>
          </div>
        </nav>
        <div class="contents-wrap">
          <div class="main-contents-container">
            <div class="main-contents-title">
              <img src="./img/profile1.jpg" alt="" />
              <p>title</p>
              <div class="main-contents-title-more">
                <img src="./img/more.png" alt="" />
              </div>
            </div>
            <div class="main-contents-body">
              <img src="./img/pizza.jpeg" alt="" />
              <div class="main-contents-footer">
                <div class="main-contents-footer_links">
                  <img src="./img/heart.png" alt="" />
                  <img src="./img/comment.png" alt="" />
                  <img src="./img/share.png" alt="" />
                </div>
                <div>
                  <img src="./img/bookmark.png" alt="" />
                </div>
              </div>
              <div class="likes">
                <p className="likes-p">좋아요 20개</p>
                <div class="text">
                  <p>
                    <a href="">#wework</a>
                  </p>
                </div>
                <div class="comment">
                  <input type="text" class="comment-input" placeholder="댓글 달기.." />
                  <button id="comment-post">게시</button>
                </div>
              </div>
            </div>
          </div>
          <div class="story-feeds">
            <div class="story-feeds-title">
              <img src="./img/profile1.jpg" alt="" />
              <span>
                title<p>title2</p>
              </span>
            </div>
            <div class="story-feeds-body">
              <div class="story-feeds-story">
                <div class="story-feeds-body">
                  <p class="story-feeds-container">스토리</p>
                  <span>모두 보기</span>
                  <div>
                    <ul class="story__story-container">
                      <li>
                        <img src="./img/pizza.jpeg" alt="" />
                        <p>a</p>
                      </li>
                      <li>
                        <img src="./img/pizza.jpeg" alt="" />
                        <p>a</p>
                      </li>
                      <li>
                        <img src="./img/pizza.jpeg" alt="" />
                        <p>a</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="story__story-container">
              <div>
                <ul class="story__story-container">
                  <p>회원님을 위한 추천</p>
                  <span>모두 보기</span>
                  <li>
                    <img src="./img/pizza.jpeg" alt="" />
                    <p>a</p>
                    <p class="follow">팔로우</p>
                  </li>
                  <li>
                    <img src="./img/pizza.jpeg" alt="" />
                    <p>a</p>
                    <p class="follow">팔로우</p>
                  </li>
                  <li>
                    <img src="./img/pizza.jpeg" alt="" />
                    <p>a</p>
                    <p class="follow">팔로우</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Main;
