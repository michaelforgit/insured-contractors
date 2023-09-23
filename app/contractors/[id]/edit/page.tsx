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
      <Typography color="gray" className="mt-1 font-normal">
        Contractor Registration
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" crossOrigin="anonymous" />
          <Input size="lg" label="Email" crossOrigin="anonymous" />
          <Input type="password" size="lg" label="Password" crossOrigin="anonymous" />
        </div>

        <Button className="mt-6" fullWidth>
          Submit
        </Button>
      </form>
    </Card>
  );
}

export default App;
