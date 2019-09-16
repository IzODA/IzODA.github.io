# Modifying the Base Anaconda Environment

If modifying the *base* Anaconda environment instead of creating new environments, please ensure the following are set correctly:

*Note: Ensure you are logged in as the superuser that installed Anaconda in the past.*

## Permissions
- Determine the proper permissions are set by issuing: 
  ```
  ls -la /usr/lpp/IBM/izoda/anaconda/extras
  ```
- Set the umask by issuing: 
  ```
  umask ####
  ```

## User and Group
After installation of the IzODA Extras packages, it has been found that the `UID` and `GID` for `/usr/lpp/IBM/izoda/anaconda/extras` may be set incorrectly. To fix this:
- Determine if the proper owner and group is set by issuing:
  ```
  ls -la /usr/lpp/IBM/izoda/anaconda/extras
  ``` 
- If necessary, change the owner and group by issuing:
  ```
  chown -Rh UID:GID /usr/lpp/IBM/izoda/anaconda/extras 
  ```
