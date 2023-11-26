import React from 'react';
import './Logos.css';

// product logos
import Boundary from './logos/boundary.svg';
import Consul from './logos/consul.svg';
import Nomad from './logos/nomad.svg';
import Packer from './logos/packer.svg';
import Terraform from './logos/terraform.svg';
import Vagrant from './logos/vagrant.svg';
import Vault from './logos/vault.svg';
import Waypoint from './logos/waypoint.svg';

const Logos = () => {
  return (
    <div className='logos-container'>
      <ul>
        <li className='logo-item'>
          <a href='https://www.boundaryproject.io/' target='_blank'>
            <img src={Boundary} alt='HashiCorp Boundary'/>
          </a>
        </li>
        <li className='logo-item'>
          <a href='https://www.consul.io/' target='_blank'>
            <img src={Consul} alt='HashiCorp Consul'/>
          </a>
        </li>
        <li className='logo-item'>
          <a href='https://www.nomadproject.io/' target='_blank'>
            <img src={Nomad} alt='HashiCorp Nomad'/>
          </a>
        </li>
        <li className='logo-item'>
          <a href='https://www.packer.io/' target='_blank'>
            <img src={Packer} alt='HashiCorp Packer'/>
          </a>
        </li>
        <li className='logo-item'>
          <a href='https://www.terraform.io/' target='_blank'>
            <img src={Terraform} alt='HashiCorp Terraform'/>
          </a>
        </li>
        <li className='logo-item'>
          <a href='https://www.vagrantup.com/' target='_blank'>
            <img src={Vagrant} alt='HashiCorp Vagrant'/>
          </a>
        </li>
        <li className='logo-item'>
          <a href='https://www.vaultproject.io/' target='_blank'>
            <img src={Vault} alt='HashiCorp Vault'/>
          </a>
        </li>
        <li className='logo-item'>
          <a href='https://www.waypointproject.io/' target='_blank'>
            <img src={Waypoint} alt='HashiCorp Waypoint'/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Logos