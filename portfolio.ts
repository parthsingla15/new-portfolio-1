import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Parth Singla",
  title: "Hi all, I'm Parth",
  description:
    "Backend-heavy engineer with expertise in building scalable and complex systems and deploying applications. Proven ability to lead projects and deliver client-focused solutions leveraging diverse technologies (JavaScript, Express.js, TypeScript, Node.js , React.js).",
  resumeLink: "https://drive.google.com/file/d/1XAu_yEZSdiaqkUO5h5Or15UlirJP0TFd/view?usp=sharing",
};

export const openSource = {
  githubUserName: "parthsingla15",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:parthsingla666@gmail.com",
  linkedin: "https://www.linkedin.com/in/parth-singla-954b7b252/",
  github: "https://github.com/parthsingla15",
   instagram: "https://www.instagram.com/thementalist_15/",
   facebook: 'https://www.facebook.com/people/Parth-Singla/pfbid02HViT9vUckSZ8zzUhnnTG41nktwPkwK1NYv1qQDptKWRVzig1jpixWLxaWbg5M4VAl/?mibextid=rS40aB7S9Ucbxw6v',
  twitter: "https://twitter.com/Parthchess_15",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE ENGINEER WHO LIKES TO BUILD SOFTWARES THAT DO BUSINESS",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Experience in full-stack development using various languages and frameworks like ,Node.js, React.js, JavaScript, Express.js, and TypeScript."
        ),
        emoji(
          "⚡ Developed APIs to handle online print orders, showcasing expertise in building communication interfaces between applications."
        ),
        emoji("⚡ Experience deploying applications on AWS, a leading cloud platform."),
        emoji(
          "⚡ Led the solo development of Mental Chesster, a unique Chess application, demonstrating project leadership skills."
        ),
        emoji(
          "⚡ Proven ability to collaborate with clients, gather requirements, and deliver solutions that improve operational efficiency and client satisfaction."
        ),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "60", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "95",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Punjab Technical University",
    subHeader: "Bachelor of Technology in Computer Science",
    duration: "August 2022 - 2026",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Development Intern",
    company: "CipherByteTechnology",
    companyLogo:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUSEBIVFRUXFRYYFhUXFRUXFhUZFRcWFxUVFhoYHSggHhslGxUVITIhJSkrLi4uGR8zODUtNygtLisBCgoKDg0OGBAQFy0eHR4tKy8rMC0uLS0wLS0tKy0tLS0rLS0tKy0tLS0tLi0tKystLS0tLS0tLSstLS0rLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQYFBwgEAgP/xABGEAABAwIDBAcCCwUGBwAAAAABAAIDBBEFEiEGBzFBEyIyUWFxgZGxFCM1QlJyc4KhssEIMzRisyRDU3SSwhVjg6Kj0dL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAApEQACAgEEAAUEAwEAAAAAAAAAAQIRAwQSITEFEzNBYTJRcZEiNMEk/9oADAMBAAIRAxEAPwDeKIiAIiIAiIgCKC5UHbLeth9DmjY74RMNCyM9Vp7nv4eguUHZfcyre0O3eGUVxPUszj+7Yc7/ACLW8PWy562o3l4nXXDpeij/AMKG7Bb+Y3zH2qnKtl1A3pjO/qIXFJSOf/PK/IPMNbcn2hU7Ed82Ly3DHxQg8MkdyPIuJWvESy21FhrducVlN311R92QsHsZYLHSY9Wu7VVUO77zSH3lY5FBNGQjxqrb2amdvlNIPcV7aPbPFIiHMrqm4+lK949jyR+CwSIKL/h++DGIhYzMl1/vI2k+V22Vuwjf2eFZR6c3wv8A9j//AKWk1CmyNqOrdnt5OFVdmx1LWPPBkvxbr9wzaH0KtwcFxKVZdmNvMRoLCnnJYP7qS747d1r6fdISyrgdbhFrPY3fDRVWWOqtTTGwGY/FPP8AK7l972rZTXg6jUHmFYo1R9IiIAiIgCIiAIiIAiIgCIiAgrFbRbRU1DEZqqQMaOA4ucfotHElYjb7bmnwyLM855nA9FCDq4/Sd3N8VzNtNtDU10xmqZC53zW36jB9Fg5BRZZKy3beb16utLoqcmnp/og2keP53DgPALXd1CKrZpVBERAEREAREQBERAEREAREQEq77D7zK3DyGFxmp+cTzctH/LdxHlwVHUpYOvdktrqTEY+kpn3I7cbtJGHuc39Ros8FxnguMT0kzZ6aR0b28weI7nDgR4FdKbtt4UOJx5HWjqWjrx30cB89nePDkrWZyVF5RQpUlQiIgCIiAIiIAqpvB20hwyDO6zpXgiKK+rj3n+UaXKy20uNw0VPJUzus1g9XE9lo7ySuUNq9opq+pfUTnVxOVt9I2fNYPIW81DLJWeTGcVmqpXz1Dy+R5uSfwAHIDkF4URVNAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAL0UFbJBI2WF5ZIw5muHEELzogOpN2O3seJQ5X2bUxgdIz6Q4dIwd3hyV5XGWB4xNSTMqKd2WRhuDyPe1w5g9y6v2M2nhxGmZUQkXOkjL6xvA1afb6ghWRm1RnkRFJUIiIAocVKoe+Lar4DQubG600144zzaD23+jSbeJCDs1Nvn20NbUmnid/Z4HEC3CSQaOf5DUBa4uhUKjZsuAiIgCIiAIpX1HG5xs0EnuAuUJXJ8IvbLhVQ1pe6J4aOLiNBqB7yFkdl9k6rEC8U4ZZgGZz3ZQL8BwOqrvilbfBLjJOmjBIrhjO7evpYXzydE5jBd2R9yBzNiBw0VPKRnGfMXZDTTpkKVl9mdm6mvkMdOG3a27nOdZoHK5se5Z7Et2GIwxPld0LgxpcQ2Ql1hxsC0KJZIRe1vkKLaspShemko5ZSREwvIFyByCVNDNH+8jc3zBCtaurJ2yq64PMilQpKhERAEREBKum6vbF2HVbcxPQSkMlbyHJsnmCfZdUpSEQZ21G8EAg3BAIPeDzX0tXbidrDU0ppJnXlp+ySbl0R7Pq03HlZbRVzGqCIiAgrlje7tEa3EZLG8cPxUY5dUnO71df2DuXQ+32NfA6ConBs4RuDPruGVn4m/ouRCb6nU8z3nmVVl4IhERQXCIiAKVClAFs7Y7DmRU7HgdeQZieevAX7tPxWsStwYOPiIvs2+4Lj1smoJL3PV8Kgnlk2ukYLazHacwywh93mwsASLh7TYnhyKzW4fs1X1ovc9arxE/GyfXd7ytqbh+xVfWi9z1TUYlj0zSOfJnlmzJy9i8befJ1X9g9c0krpbb35Oq/sH+5ZPA9h8MZTxD4JE74tpLntDnEkAkkniblR4d6b/JhqXUkap3Ej42p+pH+Zy2lj/wDDT/ZSflKx1JgdNSYnMKaMRtkponua3RubpZWkgcrhoWRx/wDhp/spPylcmsf/AE/o1w+kc9bF4nFTyPdKSAWWFgTrfwWxIZoqiO4s+N2muoPhqtNhbL2DdekHg9/+3/2u3W40l5i7O3wvO2/JdUUTHqIQzyRt4B2nkdR71j1ndtR/bJPu/lasGuyDuKZ5meKjkkl7MhFKhWMgiIgCIiAsOwOPmgroagHqh2WQcix/Vdfyvf7oXXMTw4BzdQQCD3g8FxKup90GOGqwyEuN3x3if3ksNmk+bbKUUmi6oouisUs07+0Zi2WGnpWnWR7pH/VjsGj1c4n7q0Mtkb/K0yYpkvcRwsaPAm7j71rhVZrHohERQSEREAUhQpQGVwfAZ6ixY3qXsXk2AWzJpWQQlxPVjZ7bDQeug9VUtiscgij6GRxa4vJBt1dbDis5tZhRnhOVxDmAuDbnK62tiO/uK83PKUsqjPhI97Rwjj08p4+ZNcmsHuJJJ4k3Pqtubh+xVfWi9z1qIrbu4fsVX1ovc9dGu9CR42P60Xjb35Oq/sH+5XTC/wBzF9mz8oVL29+Tqv7B/uV0wv8AcxfZs/KFj4f6b/I1X1FbrvlN/wDk4/68yjH/AOGn+yk/KVNd8pv/AMnH/XmUY/8Aw0/2Un5SuPV/2P0bYfSOWgr7u7q2mOSInrB2ceIIsfZZUIK0bD4UZZDKXFrYyOySCSeAuOVl62pinjduhoZSjnjtVmT2x2dmlk6aEZrtAc24uC3S+vEKjOaQSDxGnsW2sWxmCmt0rjcjRrRckd/gtUTvBc4jmSfaVno5ylD+Xt0dHieLHHJcHy+z8yoUqF1HmBERAEREAW5/2csVtJU0pPaaJWjvykNd72rTKum5yu6HFqfWwfnjPjnboPaApREujqeyIikyOSd5NYZcUrHnlM5g/wCn1P0VZWS2kkLqupcec8x9sjljVU2QREQBERAEREJJW4sMeXQxk8SxvuC06Ft3AZA6niI+g38NP0K4df8ATF/J63hD/lNfdGp6uPLI9o5OcPYStsbh+xVfWi9z1QtoNnKiN0stgY8xOYEcHOAGnH5wV93Ediq+tF7nqdXNS07aZw+XKGWpKuS8be/J1X9g/wByumF/uYvs2flCpe3nydV/YP8Acrphf7mL7Nn5QqeH+m/yZ6r6it13ym//ACcf9eZRj/8ADT/ZSflKV/ym/wDycf8AXmTHz/Zp/spPylcmr/sfo2w+kctBbI3fx2pSfpSPPsDQP19qoeFYZLUEtibmIFzqBpw5+a2Zszhz6enbG+2a7ibG4Ga1h7Au/XTWzbfJ0+FY5ebvrhJlG24lJq3g/NDQPLKD+qwCzO2D71kvmB7GgLDLpx8Qj+Dh1DvLN/LCIiuYhERAEREAWR2eqzDVQSt4tmjP/cL/AIErHL9qNpMjAOb2j2kD9UD6OzPhg8EWJyPRLM6OVNo2EVdSDynlH/kcscrJvGpDFidY0i3x73Dyecw96raGiCIiAIpUsYSbAEnw1QHyi+3xkGxBB7josvQ7K1k1O6qjjvE29zcXOXtFo52VZSUeW6JXJhlYNntp30wyOGdl7gXsW+R7vBV9EnBSVSRfHlljlug+S5Y3tdDNA+JsbwXAAEkWFnNdy+qsHg+0lXSseyml6PO5rnOaBmOUEAXPLrFeanwepkjMzIXujF7vDSWjLx18F4gqwxwinFdFs2eeV7pvksUu3GIvZJHLUOkZIxzHNfYizuYsBYpie22ITSF/wiSMWaGsZI9rWta0NAAB8OKrqLRJR6Ri+eyyQbc4iwECodmyBgkPWkDWuc/LmN/nOPobKWbe4lqH1LntLXNcxwBaQ4WPAeKrS+msJ4AnyF1DhFu2hbSqzMbLYwylkc97S4FttLd4PPyWcrtugWkQxkEjtOINvGwVMdE4C5aR5ghfBCznghKW6S5OnHq8uOHlxdI+pZC4lzjck3JPEk8br4UoAtaOeyEUkIhBCIiEhERCAv3oZMskbu57D7HA/ovwXswiAyTwsAuXSsHtcAiD6OsemKLI/Ax3IpM7Od9/VJkxQu5SRRu9Rdp9y10t4/tG4VdlLVAdkvid5Os5h9od7QtGoy8egiIoJP2o4HSSMjb2nua0ebiGj3rcuI1lJgNPGyKISTSX1vlLy22Zzn2uBcgABadw6o6KWOXjkkY//Q4Ot+C3HtngIxeCGoo5GktDrAu0IdbM0nk4FvDzXm65x8zGsjqDu/t8WbYr2ya7MXU7aYZiFOWV8Zik1sWtzlp5Oa+wI8j3KNloZv8Ag07mVLgwCewyN4N+iSbtB9eOi8UG7FscDpq6pEJaCXBoa4AAaXcTqfAeCy2yNv8AgdRl4WqLd/hdc8/JjirC7W+Pylz7WXW5y/l9jDbP7uI6qjjqBO5j3tvYhuRtnEE9/AFfviW66IwmShqule0G7TkIeRxDS09U+BurFs7QPqMEbAxwa6SFzQTwuXHQ+B4L43d7PT4dFUSVbmsadbZwWtDA7M8kacPXRZS1mVb2snMZUo0uSyxx4Ve3Z+W7ykMuDyRAgF5naCeAzaXPtWIm3WQvhJpavpZW8ewWOcB2OqSWnh3rNbOVIfhNXIy4DnVjhyIBLiPesNuMcc1SL6WiP4vUb8sPPywlVS6oVFqMWvYrexmw0lcXue/oooyWuda5Lhe7QL2FuZPes/i27CMxOkoKkzFl7sOU5iNS0OabA+BCs2wNVHJT1MDQxz2Tz5ozoHB7nFtxbsnVvovZhgkpopJPgVNStGr7S6WaO0S1trceatl1ufzZbXVNUuOf9EcUNpr/AGT3fx1tGZ+le2Que1rbNy3aQBfnz1WwN0+z0dFX1ELJOl/ssLnOIA6zpXggWOg0Cw+y9UXYNUyN6mY1bgAezfWwXn/Zy/iau/8AhR/1Cu/SZMuTNk3S4i6qjDKoxhGl2bA2ex7EKmsnpqvDslM3pQ2ZzXBrw1+Vlw/R2YaqiUO7nDMQrK5kFQ+PophlZHkczK5rTcX7pOkBtpoFd8Bkx59dIythj+BEyhrj0eYtzER2yuJNxbiLaqhU1fTYVtGY6YtbTylkUrWnqRultwtoA1+U68ASvROYquxWwb6zEJKOVzmNh6TpXtAuMpytAvoC51jryutu7qdm6OkmrW007pi2RkTg/JcGMEk2byu5w+6sntG2DCYsQxJv7ybIQP8AmZRGxo8C7re1UH9nSpzVFbndd72xP14us+TOfa8e1CbMPtPu8ZNiTIMPqBMZjLJM67C2n+M618mumbgdSrA/cnREGGPEHGpDblpEZHmYwcwbw1uvTsHhkmHY1UMq8jDWNmNPZ4OYCbPbwJbyPcreMLlbWvlZhdKHAuc2rM3XfmAB0DMwcRcHW3jyQizmvaDBZqOokppwA9hANtQQQCHDwIIWNV13vYr8IxKQkMvGxkRyOL2ksuTqQNQXW+6qUqmifAREQklWzdVQdPitK3iGvLz5MBPvsqktvfs6YVmqZ6ojSOMRtPLNIQXfg0e1SiJdG/kUIpMir7zME+F4bURNF3hhewfzR9YD1tZcmrtty5M3mbPmhxCaK1mOPSRdxZISRbyOYeihl4MqyIiguSshheOVVNc08z478Q06HxIOixyKGlJU1aJMniuPVVTb4RO+QDgCer7BoppdoKqOE08czmxOzZmC1jm7XK+qxalQoRrbSoW+zcFLNl2eu11nCIkWNiCJL3Hitb4ltPXTs6Oeokez6JIsfO3FTRRQmlle8zZoywWD25D0heG3BHLJ3r9Y8LgFIJ3uOdwksOlY3sODQAwjM70K58Omhicm+bbfX3LPI3Xwjy0mP1cULqeOZzYnZrsFrHOOtxF9V8YPjdTS5jTSujzWzWtra5HEeK9EdDAImF/SmSRkrm5A0tb0bngAttci7Lkg6X8F6aPZ5j4mS9JbNHM4tzNDrxXyhjTqR3roahza77KK/YxNJic8UhmikcyQkkuabEkm5v6lerFdpK2pblqJ3vb9EkAeoAsfVe7C8Cp5Yoy6VzZHNnflsMrhFfqtNrh2l9eIJtqNfxw7CoXsjDzJ0krZi0tLcjehaSLgi5uWngQquMG7pWveibfR5aXH6uOE08czmxOzZmC1jm0dyvqmBbQ1dE5zqSZ0TngBxbbrAG47QK/Koo2inimubvfI0jlZmS1ufMrI4bg8L44s5kzyiYtILcreiHMEXN7cirraraRD5PTPvExh4LXV0tj3FoPtDV59h8HdXV8MRJs6QSSvJ1DGEOe4k8za1+9wUYPg0MsTS8vzvExbZzAAIWtNrOHWOp0B4BfjhEMPQTSuMokjDbFjw0ESHKAbi/Hx10U7iGjYn7QG0QfLFQxOu2MCSSx0zOFmN9G3PqFqrDcQmp3iWnkdG8cHtNj5eXgsxS4ZC6l+ESvOcukGsrG9gNtYPBLtT38gF9YPgcMsIc5z+kcZAGhzGnqC4ytf2/GxFrKHJBI8OMbSVlU9klTO+R8YsxxsC3UHQtA5gFe+fb7Fnx9E6tmLCLEXANu7MBm/FVsqFaxSPolfKIoJCIiAldObkcGNPhkb3Cz53OlPfYmzL/dAPqudtmMHfWVUNMwXMjwD4N4vPo0ErsOjgbGxsbBZrWhoHcGgAe5Sik2frZFKKxQLWe/PZb4VR/CY23lp+toNXRntj07XoVsxfEjQRYi4OhHfdAnRxMVCu29XY92H1jsjfiJSXxG2gv2oz4gnTwsqSqGwREQBSoRAfo2dwaWAkNdYuHI5b5b+Vz7V6ocXnZEYWv8Aizm6uVpHW7VrgkXXhRAe2HFqhsZhbI4Rm/V00vxANrgHmARfW/Er8m10oAAe4BocBrwD+2PVfgoQHojrpW5cr3DIHBtj2Q++cDzubr9afFZ2RmJkhDDe7Rb5ws6xtcAga2IXiUoD20+LTsjMTX/Fm92lrSOsLOtmBIv4KKfFqiNhjZI4MN7jTnxsTqL87WXiRAe2mxWeNhjjkc1hvcC3MAGxtcXAF7cVNLi08Uboo35WOvmblac1xY3JF+C8KID30uMVEcZiZIQwkkts0i7hYkXBtcDkopsWqI2GOORzWG9wLcxY2PEX8F4lCgBFKhSAiIgClQs/sVs1JiFXHTsuGk3kfbsRjtO8+Q8UBtX9nzZezZMQkbq68cNx80fvHDzOnoVugBebDqKOCNkUTcrGNDWjuAXqVzJuwiIhAREQGB2z2ZhxGmfTyjjqx/Njx2XD9VyhjuETUk8lPO3K9jiD3EcnN7wRYgrsyyo+87YGPE4c0YDalg+LfwzD/Df4ePJQyylRy2i9FfRyQyOilaWPYSHNcLEELzqpoEREAREQBERAEREAREQBERAEREAREQBEX0xhJAAJJNgALknkAgPunp3yOayNpc9xs1o1JJ4ABdSbsNimYZTWcAaiSzpneIGjB4N18zdV7dDu5+BtFZVtBqHDqMP9y0/7zpfuW1LKyM5SJREUlQiIgCIiAKFKICi7yd3cGJRl7MsdS0dSS2j+5knePHldc04vhk1NK6GoYWSNOrT7x3jxXaCre2WxtJiUWSobZ4BySttnjPIg8x4HioaLRdHI6hWvbbYKsw156VhfDfqztByHuDvonzVVsq0aWQiIgCIiAIiIAiIgCIiAIiIApSyz2yeyNZiMmSmjJaCM0puI2ebu/wABqgMNS0z5HtjjaXvcbNa0XJJ5ALoXdbuuZRhtVWAPqbXaw6thv73+PK6sGwe72lwxt2/GTkdaZwF/qsHzR71cQrUZykFKIpKhERAEREAREQBERAEREB+U8DXtLXtDmkWLXC4I8QVqjbLcpTzZpcPf0Dzc9E7WIn+Xm38QtuIgXBx3tBsvXULstXTvj7naFh8ntu38Vh7LteeBj2lr2hzTxDgCD5gqh7Q7ocJqbmOI07zzhNm/6D1fYAq0XUzmNSts4zuKrWXNLURTD6L7xv8A1afaFTsQ3d4vDfPRykDmyzx6ZTqlFtyKsi9NVQTRG0sMkZ7nsc33hedQTZCIV+1NSySHLHG97jwDWucT6AILPyUKzYfsBi01ujopbHm4Bg9c1lb8I3GYhJY1M0MI7gTI/wBgs38VNEbkarssjg2BVVW/o6WB8rv5RoPNx0HqV0DgG5nC4LOnD6lw/wAR1mf6W2v6rYNFQxQtDIY2RsGgaxoa0egSirmad2P3HgZZMSkvwPQRnTye/n932rcOH4fFAxscDGxsbwa0WAXpAUqxVuwiIhAREQBERAEREAREQBERAEREAREQAL5KIgBX0iKAeHEOPotb7W/P8ipRQy8ejFbJ8G+f6ramFfN8lKKETLoyq+SiKxmSFKIpACIiAIiIAiIgCIiAIiID/9k=",
    date: "June 2023 - August 2024",
    desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Mental Chesster",
    desc: "A Chess application made for the chess players to expand their carrier in chess and also earn for it.",
    link: "https://github.com/parthsingla15",//need to change the link
    github: "https://github.com/parthsingla15",//need to change the link
  },
  {
    name: "Voting Portal (In Progress)",
    desc: "Have you ever been in dilemma of How can i make the Process of voting online? the portal is a food system and a PWA to help you with your problem.",
    github: "https://github.com/parthsingla15/Voting-portal-management-system1",
  },
  {
    name: "GenZ Passwords",
    desc: "GenZ was a project made for my connection to manage the Passwords for their organisations and to Create random pass.",
    link: "https://https://github.com/parthsingla15/password-generator.in/",
  },
  {
    name: "Your Journey",
    desc: "A multi-lingual apartment listing and contracts website made for a client.",
    link: "https://github.com/parthsingla15/Voting-portal-management-system1",
  },
  {
    name: "Greenhat (In Progress)",
    desc: "Greenhat is a general backdoor. Has some added functionalities that can be used to prank the victims too.",
    github: "https://github.com/parthsingla15",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Luca Malandrino",
    role: "Full-Stack Developer (Upwork Client)",
    feedback:
      "Parth carefully listens to requirements and he is open to changes. Very flexible and knowledgeable about technical topics. Contract successfully ended, very good experience!",
  },
  {
    name: "Aarushi",
    role: "Developer at govt. of Manitoba Canada.",
    feedback:
      "Parth  has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Parth Singla ",
  description: greetings.description,
  author: "Parth ",
  image: "https://avatars.githubusercontent.com/u/107746968?v=4",
  url: "https://prakharsinha.xyz",
  keywords: [
    "Parth",
    "Parth Singla",
    "@parthsingla15",
    "Parth Singla Portfolio",
    "Parth Singla Resume",
    "Parth Singla Portfolio Website",
    "Parth Singla Developer",
  ],
};
