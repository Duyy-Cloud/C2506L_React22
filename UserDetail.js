import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Spin } from "antd";
import axios from "axios";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  if (loading) return <Spin size="large" />;

  return (
    <Card title={user.name} style={{ maxWidth: 600, margin: "20px auto" }}>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
      <Button type="primary">Edit User</Button>
    </Card>
  );
};

export default UserDetail;
