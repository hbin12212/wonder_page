import React from "react";
import Image from "next/image";
import Link from "next/link";

//IMG
import profile from "../public/img/profile_mockup.png";
import profile1 from "../public/img/profile_detail1.png";
import profile2 from "../public/img/profile_detail2.png";
import profile3 from "../public/img/profile_detail3.png";
import profile4 from "../public/img/profile_detail4.png";
import profile5 from "../public/img/profile_detail5.png";
import profile6 from "../public/img/profile_detail6.png";
import wonder from "../public/img/wonder_mockup.png";
import wonder_mb from "../public/img/wonder_mockup_mb.png";
import call from "../public/img/call_mockup.png";
import call_mb from "../public/img/call_mockup_mb.png";

const Home = () => {
    return (
        <div className="Home">
            <div className="header">
                <div></div>
                <div className="main">
                    <div className="logo">Wonder</div>
                    <div className="menu">
                        <a href="https://22hours.oopy.io/" target="_blank" rel="noreferrer">
                            <div className="blog">블로그</div>
                        </a>
                    </div>
                </div>
                <div></div>
            </div>
            <div className="body">
                <div className="section_profile">
                    <div></div>
                    <div className="main">
                        <div className="title_wrapper">
                            <div>
                                <div className="title">
                                    <div className="service_name"> Wonder</div>
                                    <div>다양한 나를 위한 프로필</div>
                                </div>
                                <div className="sub_title">
                                    직무, 이력으로만 설명할 수 없는
                                    <br />
                                    나를 위한 가장 완전한 프로필을 만듭니다
                                </div>
                                <div className="join_btn_wrapper_pc">
                                    <Link target="_blank" href="/contact">
                                        <div className="join_btn">얼리억세스 신청하기</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="img_wrapper">
                            <Image className="shadow" src={profile} alt="profile"></Image>
                        </div>
                        <div className="join_btn_wrapper">
                            <Link target="_blank" href="/contact">
                                <div className="join_btn">얼리억세스 신청하기</div>
                            </Link>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="section_profile_detail">
                    <div></div>
                    <div className="main">
                        <div className="title_wrapper">
                            <div className="sub_title">다양한 관심사를 가진 당신을 위해 설계된</div>
                            <div className="title">Wonder의 개인 프로필</div>
                        </div>
                        <div className="img_wrapper">
                            <div className="interest_wrapper">
                                <div className="title">관심사 태그</div>
                                <div className="sub_title">
                                    우리가 무엇에 관심 있는지
                                    <br />
                                    자유롭게 태그로 정리해요
                                </div>
                                <div className="img_wrapper">
                                    <Image className="pc" src={profile1} alt="interest1"></Image>
                                    <Image className="mb" src={profile4} alt="interest2"></Image>
                                </div>
                            </div>
                            <div className="highlight_wrapper">
                                <div className="title">하이라이트</div>
                                <div className="sub_title">
                                    작업물, 유튜브 영상, 인스타 등
                                    <br />
                                    보여주고 싶은 링크들을 등록해요
                                </div>
                                <div className="img_wrapper">
                                    <Image className="pc" src={profile2} alt="highlight1"></Image>
                                    <Image className="mb" src={profile5} alt="highlight2"></Image>
                                </div>
                            </div>
                            <div className="wonder_wrapper">
                                <div className="title">하고싶어요</div>
                                <div className="sub_title">
                                    지금 무슨 일을 하고 싶은가요?
                                    <br />
                                    커피마시기? 유튜브 출연하기?
                                </div>
                                <div className="img_wrapper">
                                    <Image className="pc" src={profile3} alt="want1"></Image>
                                    <Image className="mb" src={profile6} alt="want2"></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="section_wonder">
                    <div></div>
                    <div className="main">
                        <div className="title_wrapper">
                            <div className="sub_title">꼭 필요한 기회들을 몰라서 놓치지 않도록</div>
                            <div className="title">하고싶어요 피드</div>
                        </div>
                        <div className="img_wrapper">
                            <div className="img_wrapper">
                                <Image className="pc" src={wonder} alt="wonder1"></Image>
                                <Image className="mb" src={wonder_mb} alt="wonder2"></Image>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="section_call">
                    <div></div>
                    <div className="main">
                        <div className="title_wrapper">
                            <div className="sub_title">누군가 나를 찾는 것 같아요</div>
                            <div className="title">버튼 한 번에 연락하기</div>
                        </div>
                        <div className="img_wrapper">
                            <div className="img_wrapper">
                                <Image className="pc" src={call} alt="call1"></Image>
                                <Image className="mb" src={call_mb} alt="call2"></Image>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="footer">
                <div></div>
                <div className="main">
                    <div className="title_wrapper">
                        <div className="title">Wonder</div>
                        <div className="sub_title">
                            다양한 관심사와 매력을 가진 <br />
                            우리를 위한 <br />
                            새로운 네트워크
                        </div>
                        <div className="join_btn_wrapper">
                            <Link href="/contact" target="_blank">
                                <div className="join_btn">얼리억세스 신청하기</div>
                            </Link>
                        </div>
                        <div className="footer_wrapper">
                            2023. 01 베타 테스트 시작 예정
                            <br />
                            @2022 WonderLab
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};
export default Home;
