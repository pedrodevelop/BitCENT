import createUuid from "@/logic/core/shared/Id";
import Usuario from "@/logic/core/user/User";

export default {
  id: createUuid(),
  name: "Pedro Henrique",
  email: "fon@hotmail.com",
  imageUrl: undefined,
} as Usuario;
