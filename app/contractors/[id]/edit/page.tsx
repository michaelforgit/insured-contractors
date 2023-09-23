'use client';
import React from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const App = () => {
  return (
    <Card color="transparent" shadow={false}> 
      <div color="gray" className="mt-1 font-normal">
        Contractor Registration
      </div>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="First Name" crossOrigin="anonymous" />
          <Input size="lg" label="Last Name" crossOrigin="anonymous" />
          <Input size="lg" label="Company Name" crossOrigin="anonymous" />
          <Input size="lg" label="Company Email" crossOrigin="anonymous" />
          <Input size="lg" label="Company Address" crossOrigin="anonymous" />
          <Input size="lg" label="City" crossOrigin="anonymous" />
          <Input size="lg" label="State" crossOrigin="anonymous" />
          <Input size="lg" label="Zipcode" crossOrigin="anonymous" />
          <Input size="lg" label="Insurance Name" crossOrigin="anonymous" />
          <Input size="lg" label="Insurance Email" crossOrigin="anonymous" />
          <Input size="lg" label="Insurance Phone" crossOrigin="anonymous" />
        </div>

        <Button className="mt-6" fullWidth>
          Submit
        </Button>
      </form>
    </Card>
  );
}

export default App;
