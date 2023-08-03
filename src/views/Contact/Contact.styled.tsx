import styled from "@emotion/styled";

export const ContactOptions = styled.div`
  display: flex;
`;

export const ContactSocialLinks = styled.div`
  flex-grow: 1;
`;

export const ContactTitleText = styled.h2`
  font-size: 1.5rem;
  font-weight: 900;
  color: #fff;
`;

export const ContactMeEmail = styled.a`
  color: #fff;
  font-weight: 900;
  font-size: 1.5rem;
  
  &:hover {
    color: #c9335d;
  }
`;

export const ContactLinksContainer = styled.div`
  margin-top: 1em;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  border-radius: 0.5em;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-items: center;
    align-items: center;
  }
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  height: 3em;
  background-color: #161721;
  padding-left: 1em;
  color: #fff;
  font-weight: 900;
  cursor: pointer;
  border-radius: 0.5em;
  align-items: center;
  text-decoration: none;
  

  &:hover {
    background-color: #c9335d;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding-left: 0;
    height: 6em;
    width: 12em;
  }
`;

export const ContactOrText = styled.p`
  margin: 0 1em;
  color: #fff;
  font-weight: 900;
  font-size: 2rem;
`;

export const ContactForm = styled.div`
  flex-grow: 2;
`;

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const ContactFormInput = styled.input``;

export const ContactFormTextArea = styled.textarea``;

export const ContactFormButton = styled.button``;
