package com.ovniric.repository;

import com.ovniric.model.user.Role;
import com.ovniric.model.user.RoleEnum;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository  extends JpaRepository<Role,Long> {
}
