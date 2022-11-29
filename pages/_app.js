import React from "react";
import Image from "next/image";

//img
import tags from "../public/img/tags.png";
import content from "../public/img/content_mock.png";
import profile from "../public/img/profile_mock.png";
//style
import "../styles/globals.scss";

const Home = () => {
    return (
        <div className="Home">
            {/* <div className="header">Wonder</div> */}
            <div className="main">
                <div className="sector1">
                    <div className="title">
                        어쩌면 우리는
                        <br />
                        직업 그 이상.
                    </div>
                    <div className="sub_title">
                        다양한 관심사를 갖는 당신을 위한
                        <br />
                        이력이 아닌 관심사 기반의
                        <br />
                        새로운 커리어 네트워크
                        <br />
                        Wonder.
                    </div>
                    <div className="tags_img">
                        <Image src={tags} alt="tags"></Image>
                    </div>
                    <div className="join_btn_wrapper">
                        <div className="join_btn">
                            <a href="https://page.stibee.com/subscriptions/219667" target="_blank">
                                Join Us
                            </a>
                        </div>
                    </div>
                </div>
                <div className="sector2">
                    <div className="left_wrapper">
                        <div className="title">
                            소개하세요
                            <br />
                            나는 무엇에 관심이 있는지
                            <br />
                            무슨 일을 하고 싶은지
                        </div>
                        <div className="sub_title">
                            우리는 당신의 이력이 궁금하지 않아요
                            <br />
                            무슨 생각을 하는 사람인지
                            <br />
                            무슨 재미있는 관심사들이 있을지
                            <br />
                            무슨 일을 나와 함께 해 볼 수 있을지
                            <br />
                            알려주세요
                        </div>
                    </div>
                    <div className="right_wrapper">
                        <Image src={profile} alt="profile"></Image>
                    </div>
                </div>
                <div className="sector3">
                    <div className="left_wrapper">
                        <div className="title">
                            몰랐던 기회들과
                            <br />
                            함께 하고 싶은 사람을
                            <br />
                            찾아보세요
                        </div>
                        <div className="sub_title">
                            아주 사소한 일이라도 좋아요
                            <br />
                            무슨 일을 함께 해보고 싶은지
                            <br />
                            어떤 사람과 함께 하고 싶은지
                            <br />
                            나는 이걸 왜 하려고 하는지
                            <br />
                            말해주세요
                        </div>
                    </div>
                    <div className="right_wrapper">
                        <Image src={content} alt="content"></Image>
                    </div>
                </div>
                <div className="sector4">
                    <div className="title">
                        Wonder에
                        <br />
                        지금 참여하세요
                    </div>
                    <div className="sub_title">
                        다양한 관심사를 갖는 당신을 위한
                        <br />
                        이력이 아닌 관심사 기반의
                        <br />
                        새로운 커리어 네트워크
                    </div>
                    <div className="join_btn_wrapper">
                        <div className="join_btn">
                            <a href="https://page.stibee.com/subscriptions/219667" target="_blank">
                                Join Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">2022.WonderLab</div>
        </div>
    );
};
export default Home;
