import { CONTEXT_TYPEs } from "..";

export const imageState = {
  userImage: "",
  projectImage: "",
  blogImage: "",
  skillImage: "",
  certificateImage: "",
  workImage: "",
};

export const imageReducer = (state = imageState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CONTEXT_TYPEs.USER_IMAGE:
      return {
        ...state,
        userImage: payload,
      };
    case CONTEXT_TYPEs.PROJECT_IMAGE:
      return {
        ...state,
        projectImage: payload,
      };
    case CONTEXT_TYPEs.BLOG_IMAGE:
      return {
        ...state,
        blogImage: payload,
      };
    case CONTEXT_TYPEs.CERTIFICATE_IMAGE:
      return {
        ...state,
        certificateImage: payload,
      };
    case CONTEXT_TYPEs.WORK_IMAGE:
      return {
        ...state,
        workImage: payload,
      };
    case CONTEXT_TYPEs.SKILL_IMAGE:
      return {
        ...state,
        skillImage: payload,
      };
    default:
      return state;
  }
};
