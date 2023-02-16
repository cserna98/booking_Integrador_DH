package com.ovniric.repository;

import com.ovniric.model.Role;
import com.ovniric.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository  extends JpaRepository<Role,Long> {
    Role findByName(String Name);
}
