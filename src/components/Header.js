import { StyledHeader, StyledNav, HeaderGrid } from "./styles/Header.styled";

export default function Header() {
    return (
        <StyledHeader>
            <StyledNav>
                <div>
                    <svg width="161" height="30" viewBox="0 0 161 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32.1787 12.8512C31.6833 9.61115 30.0826 6.60844 27.6159 4.29201C25.1492 1.97558 21.9491 0.469876 18.4939 0V12.8512H32.1787ZM0 15.0002C0.00120432 18.6459 1.4039 22.1692 3.95099 24.9241C6.49808 27.6791 10.0189 29.4811 13.8682 30V0.00463867C10.0197 0.523437 6.49949 2.32488 3.95249 5.07892C1.4055 7.83296 0.00230652 11.3552 0 15.0002ZM32.362 23.2996C32.362 26.891 29.2565 29.8024 25.4256 29.8024C21.5948 29.8024 18.4893 26.891 18.4893 23.2996C18.4893 19.7082 21.5948 16.7967 25.4256 16.7967C29.2565 16.7967 32.362 19.7082 32.362 23.2996ZM52.2683 9.63621V13.2508H58.98V16.2163H52.2683V20.2306H60.0253V23.2864H48.564V6.60187H59.984V9.63621H52.2683ZM120.958 23.2864V20.2306H113.165V6.60187H109.497V23.2864H120.958ZM133.648 16.1736V23.2867H130.292V22.3498C129.883 22.7375 129.393 23.0424 128.853 23.2457C128.313 23.449 127.734 23.5463 127.152 23.5317C124.676 23.5317 123.058 22.3498 123.058 20.1191C123.058 17.5404 125.35 16.7281 127.982 16.6163L130.173 16.5046V16.0748C130.173 14.9143 129.651 14.2911 128.578 14.2911C128.356 14.2721 128.132 14.2976 127.921 14.3659C127.711 14.4341 127.518 14.5437 127.356 14.6871C127.193 14.8306 127.066 15.0048 126.981 15.1981C126.896 15.3914 126.856 15.5994 126.863 15.8083L123.388 15.6751C123.388 13.6464 125.364 11.549 128.527 11.549C131.837 11.5318 133.648 13.1393 133.648 16.1736ZM128.317 18.7524C127.271 18.7954 126.533 19.1306 126.533 19.9558C126.533 20.7122 127.129 21.0045 127.959 21.0045C129.22 21.0045 130.173 20.3555 130.173 19.1306V18.6492L128.317 18.7524ZM142.991 11.5318C141.423 11.5318 140.185 12.0647 139.544 12.7567L139.562 5.97451H136.087V23.3212H139.351V22.1392C139.993 22.9214 141.277 23.5661 142.991 23.5661C146.498 23.5661 148.951 21.2023 148.951 17.549C148.951 13.8957 146.489 11.5318 142.991 11.5318ZM139.544 17.7725V17.2653C139.544 15.4301 140.708 14.3169 142.446 14.3169C144.183 14.3169 145.421 15.4773 145.421 17.5275C145.421 19.5776 144.16 20.7166 142.446 20.7166C140.731 20.7166 139.544 19.6464 139.544 17.7725ZM160.6 15.258L157.148 15.4342C157.161 15.2406 157.128 15.0468 157.053 14.8662C156.977 14.6857 156.86 14.5228 156.71 14.389C156.561 14.2551 156.382 14.1536 156.186 14.0913C155.99 14.0291 155.782 14.0078 155.576 14.0288C154.659 14.0288 154.173 14.3855 154.173 15.0087C154.173 15.7159 154.883 15.8874 156.065 16.173L156.065 16.173C156.227 16.2121 156.397 16.2532 156.575 16.2981C159.023 16.8999 160.761 17.6133 160.761 19.7108C160.761 22.0532 158.927 23.5489 155.718 23.5489C152.578 23.5489 150.744 22.2122 150.482 19.801L153.958 19.6205C154.003 20.4801 154.553 21.0475 155.741 21.0475C156.694 21.0475 157.286 20.6692 157.286 19.9987C157.286 19.3282 156.827 19.0833 155.049 18.6835C152.431 18.0603 150.693 17.5446 150.693 15.1807C150.693 12.9715 152.527 11.5445 155.617 11.5445C158.707 11.5445 160.385 13.1176 160.6 15.258ZM74.2832 23.2867V16.238C74.2832 13.2509 72.3073 11.5317 69.4649 11.5317C67.8007 11.5317 66.705 12.1334 66.1595 12.9371V11.7552H62.877V23.2867H66.352V16.8827C66.352 15.4987 67.3148 14.5618 68.6443 14.5618C69.9738 14.5618 70.8082 15.387 70.8082 16.8612V23.2867H74.2832ZM80.4583 23.2864L75.1494 11.755H78.9775L81.8566 18.5372L84.7128 11.755H88.5408L83.2411 23.2864H80.4583ZM95.8167 18.5373L98.6729 11.755H102.496L97.5955 23.2866L97.2654 24.0646C96.9603 24.8305 96.5634 25.5615 96.0826 26.2437C95.7769 26.6911 95.3888 27.084 94.9365 27.4042C94.2747 27.823 93.488 28.0338 92.6901 28.0059C92.0111 28.0253 91.3331 27.9426 90.6821 27.7609L90.2832 27.6277V24.5847C90.5459 24.6734 90.8137 24.748 91.0855 24.8081C91.4518 24.9061 91.8373 24.9233 92.2119 24.8584C92.5865 24.7935 92.94 24.6484 93.2448 24.4342C93.5544 24.1861 93.7646 23.8465 93.8408 23.4715C93.8527 23.4104 93.8527 23.3477 93.8408 23.2866L89.105 11.755H92.9377L95.8167 18.5373Z" fill="white"/>
                    </svg>
                    <h6>Insightful web applications</h6>
                </div>
                <div>
                    <a href="#">What We Do</a>
                    <a href="#">Case Studies</a>
                    <a href="#">About</a>
                    <a href="#">Insights</a>
                    <a href="#">Contact</a>
                </div>
            </StyledNav>
            <HeaderGrid>
                <h5>CASE STUDY</h5>
                <svg width="1025" height="1" viewBox="0 0 1025 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="4.37114e-08" y1="0.5" x2="1025" y2="0.50009" stroke="#BDC8C8"/>
                </svg>
                <p>Moonllight</p>
                <div>
                    <p>We combined data from four international soccer leagues into one fantasy sports experience.</p>
                </div>
            </HeaderGrid>
        </StyledHeader>
    )
}