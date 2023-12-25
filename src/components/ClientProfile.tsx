import { getUserName } from "../lib/auth/Roles";

import { Button, Label, TextInput } from "flowbite-react";
function ClientProfile() {
  const userName = getUserName();
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-medium">
        Welcome back,{" "}
        <span className="font-semibold text-[#155e75]">{userName}</span>{" "}
      </h1>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="address" value="Your address" />
          </div>
          <TextInput
            id="address"
            type="text"
            placeholder="Rabat, Morocco"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="fullName" value="Your full name" />
          </div>
          <TextInput
            id="fullName"
            type="text"
            placeholder="Taha ofh"
            required
          />
        </div>

        <Button type="submit">Update my information</Button>
      </form>
    </div>
  );
}

export default ClientProfile;
