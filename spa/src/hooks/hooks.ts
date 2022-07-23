import {useState, useEffect } from 'react';
import ky from 'ky';

export const getApi = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async ()=> {
      try {
        setLoading(true);
        const response: any = await ky.get(url).json();
        const data: T = response.data;
        setData(data);

      } catch (error) {
        console.log(error);
        setIsError(true);

      } finally {
        setLoading(false);

      }
    })();
  }, []);

  return {
    data,
    isLoading,
    isError
  };
};

export const postApi = <T>(url: string, options: Object) => {
  const [data, setData] = useState<T>();
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async ()=> {
      try {
        setLoading(true);
        const response: any = await ky.post(url, options).json();
        const data: T = response.data;
        setData(data);

      } catch (error) {
        console.log(error);
        setIsError(true);

      } finally {
        setLoading(false);

      }
    })();
  }, []);

  return {
    data,
    isLoading,
    isError
  };
};

export const putApi = <T>(url: string, options: Object) => {
  const [data, setData] = useState<T>();
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async ()=> {
      try {
        setLoading(true);
        const response: any = await ky.put(url, options).json();
        const data: T = response.data;
        setData(data);

      } catch (error) {
        console.log(error);
        setIsError(true);

      } finally {
        setLoading(false);

      }
    })();
  }, []);

  return {
    data,
    isLoading,
    isError
  };
};

export const deleteApi = <T>(url: string) => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async ()=> {
      try {
        setLoading(true);
        await ky.delete(url);

      } catch (error) {
        console.log(error);
        setIsError(true);

      } finally {
        setLoading(false);

      }
    })();
  }, []);

  return {
    isLoading,
    isError
  };
};
